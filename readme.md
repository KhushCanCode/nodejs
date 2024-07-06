# Node Js Basic

First of all i made 3 pages, home, contact, about.
I included the css inside them altogether.

Then i made a server.js file.

Here i imported the http module from node.

    const http = require("http");

Then i imported file system module.
And read all the files with readFileSync. This function is synchronous which means next instruction won't execute before it does.

    const fs = require("fs");

    const homePage = fs.readFileSync("./home.html", "utf-8");
    const aboutPage = fs.readFileSync("./about.html", "utf-8");
    const contactPage = fs.readFileSync("./contact.html", "utf-8");

Then I created the server with createServer function.

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

When the request url id "/about" then the server will respond with the About page. 
All the routes are setup in this way. 
An error page is also set upped. If the server doesn't have the required page it will show an error page.

And at the end server should listen. that is how the server setup is complete.

    let port = 2000;
    let hostname = "localhost"

    server.listen(port, hostname, ()=>{
        console.log("server is working");
    });

When we deploy our website then we need to setup an environment variable for port so the website we are hosting it on can 
change the port according to client's pc.

let port = process.env.PORT