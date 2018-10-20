const apiList = require('../api/api');

module.exports = {
    api: async(req, res)=>{
        res.json(apiList);
    },
    update: async(req, res)=>{

    }
};
