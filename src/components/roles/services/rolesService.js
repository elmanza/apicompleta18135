const {Role} = require("../../../models");
class Roles {
    async getAll(){
        try {
            let response = await Role.findAll();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Roles();