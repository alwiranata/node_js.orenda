const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
} = require("./utils/contact");
const { body, validationResult, check, cookie } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");

//third-party Middleware
app.use(expressLayouts);

//Bullt-in middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

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
  const contacts = loadContact();

  res.render("contact", {
    layout: "layout/main-layout",
    title: "Halaman Contact",
    contacts,
    msg: req.flash("msg"),
  });
});
//halaman form tambah data contact

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form tamabah data contact",
    layout: "layout/main-layout",
  });
});

//proses data contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error("Nama sudah digunkan");
      }
      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("nohp", "No Hp Tidak Valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "Form Tambah data Contact",
        layout: "layout/main-layout",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      //kirimkan flash message
      req.flash("msg", "Data Contact berhasil ditamabhakan");
      res.redirect("/contact");
    }
  }
);

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    layout: "layout/main-layout",
    title: "Halaman Detail contact",
    contact,
  });
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
