require("dotenv").config();

let config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT,
    cors: process.env.CORS
}


let db_credential = {
    DB_username: process.env.DB_USERNAME,
    DB_password: process.env.DB_PASSWORD,
    DB_host: process.env.DB_HOST,
    DB_name: process.env.DB_NAME,
    DB_dialect: process.env.DB_DIALECT
}

module.exports = { config, db_credential };