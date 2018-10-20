const apiList = require('../api/api');
const Ast = require('../models/ast');

module.exports = {
    api: async(req, res)=>{
        Ast.find({}), function(err, ast){
            if(err){
                console.log(err);
            } else {
                res.send(ast);
            }
        }
    },
    update: async(req, res)=>{
        // Get data from algorithm and save it to db
        const {name, vel, mass, radius} = req.value.body;
        const newAst = new Ast({name, vel, mass, radius});
        await newAst.save();
        res.json({ast: 'saved'});
    },
    algorithm: async(req, res)=>{

    }
};
