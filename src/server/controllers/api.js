const Ast = require('../models/ast');
const api = require('../algorithm/algorithm');
const fireballAlgorithm = require('../algorithm/fireballAlgorithm');
const richterAlgorithm = require('../algorithm/richterAlgorithm');

module.exports = {

    api: async(req, res, next)=>{
        await Ast.find({}, function(err, asts){
            let api = [];

            asts.forEach(function(ast){
                api.push(ast);
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

    update: async(req, res, next)=> {
        // Get data from algorithm and save it to db
        console.log(req);
        const {name, ip, diameter, mass, v_imp, energy} = req.body;
        const blastRadius = await api(mass, diameter, v_imp);
        const fireball = await fireballAlgorithm(energy);
        const richterScale = await richterAlgorithm(energy);
        console.log(fireball);
        console.log(blastRadius);
        const sendData = () =>{
            const newAst = new Ast({name, ip, diameter, mass, v_imp, energy, blastRadius, fireball, richterScale});
            newAst.save();
            return res.json({ast: 'saved'});
        };
        sendData(blastRadius);

        next();
    }

};
