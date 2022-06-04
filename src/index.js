let express = require("express");
let {config} = require("./config");
let path = require("path");
let cors = require("cors");
let serverRoutes = require("./routes");
let morgan = require("morgan");

class Server {
    constructor(){
        this.app = express();
        this.port = config.port;
        this.settings();
        this.views();
        this.middleware();
        this.routes();

    }

    settings(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static("public"));
    }

    views(){
        this.app.set("views", path.join(__dirname, "views", "ejs"));
        this.app.set("view engine", "ejs");
    }

    middleware(){
        this.app.use(cors('*'));
        this.app.use(morgan('tiny'));
    }

    routes(){
        serverRoutes(this.app);

    }

    middlewareError(){
    }

    init(){
        this.app.listen(this.port, ()=>{ console.log(`http://localhost:${this.port}`)});
    }
}

module.exports = new Server();












