let { Router } = require("express");
let rolesController = require("./controllers/rolesController");

module.exports = app =>{
    let router = new Router();
    app.use("/roles", router);
    router.get("/", rolesController.getAll);
    router.get("/fyh", rolesController.fyh);
    router.post("/ingreso", rolesController.ingreso);
    router.get("/egreso", rolesController.egreso);
}