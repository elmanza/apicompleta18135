let redis = require("redis");

class Redis {
    static connect;
    constructor(){
        if(Redis.connect){
            return Redis.connect;
        }
        this.client = redis.createClient({
            host: '127.0.0.1',
            port: 6379
        });
        Redis.connect = this.client;
        this.connect();
    }

    connect(){
        this.events();
        this.client.connect();
    }

    events(){
        this.client.on("connect", async()=>{
            console.log("Sirviendo!!! el Redis");
        })

        this.client.on("error", async()=>{
            console.log("ERROR DE CONEXIÓN EN REDIS");
        })
    }

    async get(table){
        try {
            let objRedis = await this.client.get(table);
            return JSON.parse(objRedis);
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            let body = await this.get(obj.table);
            body.push(obj.body);
            this.client.set(obj.table, JSON.stringify(body));
            return body;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Redis();