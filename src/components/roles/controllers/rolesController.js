let rolesServices = require("../services/rolesService");
class Roles {
    async getAll(req,res,next){
        try {
            // let singleton = new Singleton();
            let roles = await rolesServices.getAll();
            res.json(roles)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Roles();