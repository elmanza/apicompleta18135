// let http = require("http");
// let fs = require("fs");
// Request http
// let options = {
//     hostname: "localhost",
//     port:8084,
//     path:"/roles/fyh",
//     method:"GET"
// }

const { default: axios } = require("axios");

// let req = http.request(options, res =>{
//     let data = '';
//     res.on('data', chunk=>{
//         data += chunk;
//     });
//     res.on("end", ()=>{
//         console.log(JSON.parse(data));
//         // fs.promises.writeFile("art.json", data, 'utf-8');
//     })
// });

// req.on("error", (err)=>{
//     console.log(err);
// })

// req.end();


// let axios = require("axios");
// import got  from "got";

(async ()=>{
    try {
        let res = await got('https://jsonplaceholder.typicode.com/posts');
        console.log(JSON.parse(res.body));
    } catch (error) {
        console.log(error);
    }
})


async function getNumbers(){
    try {
        let res = await axios.get('http://localhost:8084/roles/egreso');
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}


async function pushNumbers(){
    try {
        let number = Math.round(Math.random() * (100 - 1) + 1);
        let res = await axios.post('http://localhost:8084/roles/ingreso',{number});
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

setInterval(()=>{pushNumbers()},2000);
setInterval(()=>{console.log("Obteniendo lista de números...");getNumbers()},10000);
