const apiList = require('../api/api');
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
    update: async(req, res, next)=>{
        // Get data from algorithm and save it to db
        console.log(req);
        const {name, vel, mass, radius} = req.value.body;
        const newAst = new Ast({name, vel, mass, radius});
        await newAst.save();
        res.json({ast: 'saved'});
        next();
    },
    algorithm: async(req, res)=>{

    }
};
