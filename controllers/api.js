const Ast = require('../models/ast');

module.exports = {

    api: async(req, res, next)=>{
        await Ast.find({}, function(err, asts){
            let api = {};

            asts.forEach(function(ast){
                api[ast.name] = ast;
            });
           res.send(api);
        });
        next();
    },

    apiParms: async(req,res,next)=>{
        console.log(req.params);
        const name = req.params;

        await Ast.findOne(name, "-ast", function(err, resp){
            res.send(resp);
        });

        next();
    },

    update: async(req, res, next)=>{
        // Get data from algorithm and save it to db
        console.log(req);
        const {name, ip, diameter, mass, v_imp, energy} = req.value.body;
        const newAst = new Ast({name, ip, diameter, mass, v_imp, energy});
        await newAst.save();
        res.json({ast: 'saved'});
        next();
    },

    algorithm: async(req, res)=>{
        const name = req.params;
        await Ast.find({name}, function(err, ast){
            let radius = '';
            const densityCalculator = (mass, diameter) => {
                const meterDiameter = diameter*1000
                const volume = 4*3.14*((meterDiameter/2)**3)/3
                const density = mass/volume
                return density
              }
              
              const angleVariable = (2**(1/2)/2)**(1/3)
              const earthDensity = 2500
              const gravity = 9.8
              
              const transientCraterFunction = (meteorDensity, meteorDiameter, impactVelocity) => {
                const densityCalculation = (meteorDensity/earthDensity)**(1/3)
                const diameterCalculation = (meteorDiameter*1000)**(.78)
                const velocityCalculation = (impactVelocity*1000)**(.44)
                const gravityCalculation = gravity**(-.22)
                const crater = 1.161*densityCalculation*diameterCalculation*velocityCalculation*gravityCalculation*angleVariable
                // crater is diameter in meters
                // We return the radius
                return .5*crater
              }
              
              const finalCrater = (crater) => {
                return 1.25*crater
              }
              const meteorDensity = densityCalculation(name.mass, name.diameter)
              const transientCrater = transientCraterFunction(meteorDensity, name.diameter, name.v_imp)
              return finalCrater(transientCrater)

              const megatonsToJoules = (megatons) => {
                const joules = megatons*(4.184*10**15)
                return joules
              }
              
              const fireball = (megatons) => {
                const joules = megatonsToJoules(megatons)
                const fireballRadius = .002*(joules**(1/3))
                return fireballRadius
              }

              const fireballRadius = fireball(name.energy)

              const richter = (megatons) => {
                const joules = megatonsToJoules(megatons)
                const M = 0.67*Math.log10(joules)-5.87
                return M
              }

              const richterScale = richter(name.energy)

            ast.update({name, radius})
        })
    }

};

