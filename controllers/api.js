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

        const data = await Ast.findOne(name, "-ast", function(err, resp){
            if(err){
                console.log(err);
            } else {
                res.send(resp);
            }
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
        const name = req.name;
        await Ast.find({name}, function(err, ast){
            let radius = '';

            // do your stuff in here

            ast.update({name, radius})
        })
    }

};
