const apiList = require('../api/api');
const Ast = require('../models/ast');

module.exports = {
    api: async(req, res)=>{

        await Ast.find({}), function(err, ast){
            if(err){
                console.log(err);
            } else {
                return res.json(ast);
            }
        }
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
