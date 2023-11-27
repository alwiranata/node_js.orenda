const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");

//third-party Middleware
app.use(expressLayouts);
app.use(morgan("dev"));

//Bullt-in middleware
app.use(express.static("public"));

//Aplication
app.use((req, res, next) => {
  console.log("time", Date.now());
  next();
});

app.use((req, res, next) => {
  console.log("time", Date.now());
  next();
});
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "aldo wiranata",
      email: "aldo@gmail.com",
    },
    {
      nama: "erik wiranata",
      email: "erik@gmail.com",
    },
    {
      nama: "erik wiranata",
      email: "erik@gmail.com",
    },
  ];
  // res.sendFile('/index.html',{root: __dirname});
  res.render("index", {
    layout: "layout/main-layout",
    nama: "Aldo Wiranata",
    title: "Halaman Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  // res.sendFile('./about.html',{root: __dirname});
  res.render("about", { layout: "layout/main-layout", title: "Halaman About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layout/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br> Category ID: ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("MAU NGEHACK DEK?");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

//  const http = require('http');
//  const fs = require('fs');
//  const port = 3000;
// const { error } = require('console');

// const renderHTML = (path,res)=>{
//     fs.readFile(path ,(err ,data) =>{
//         if(err){
//             res.writeHead(404)
//             res.write('Error: file not found')
//         }else{
//             res.write(data)
//         }
//         res.end()

//     });
// }

//  http
//  .createServer((req ,res) =>{
//     res.writeHead(200,{
//         'Conten-Type' :'text/html',
//     })

//     const url = req.url;

//     switch(url){
//         case '/about':
//         renderHTML('./about.html',res);
//         break;
//         case '/contact':
//         renderHTML('./contact.html',res);
//         break;
//         default :
//         renderHTML('./index.html',res);
//         break;

//     }

//     // if (url === '/about'){
//     //   renderHTML('./about.html',res);

//     // }else if( url === 'contact'){
//     //    renderHTML('./contact.html',res);

//     // }else{
//     //     renderHTML('./index.html',res)
//     // }
// })
// .listen(port , () =>{
//     console.log(`Server is listening on port ${port}..`)
//  });
