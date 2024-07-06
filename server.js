const http = require("http");

const fs = require("fs");

const homePage = fs.readFileSync("./home.html", "utf-8");
const aboutPage = fs.readFileSync("./about.html", "utf-8");
const contactPage = fs.readFileSync("./contact.html", "utf-8");

const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        return res.end(homePage);
    }
    
    if(req.url === "/about"){
        return res.end(aboutPage);
    }

    if(req.url === "/contact"){
        return res.end(contactPage);
    }
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
})


let port = 2000;
let hostname = "localhost"

server.listen(port, hostname, ()=>{
    console.log("server is working");
});