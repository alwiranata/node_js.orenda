const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.json({
//     nama:'Aldo Wirranata',
//     email: 'Aldowiranata16@gmail.com',
//     noHP: '0895634889510',
//   })
res.sendFile('/index.html',{root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./about.html',{root: __dirname});
//   res.send('ini adalah halaman about')
});

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html',{root: __dirname});
    // res.send('ini adalah halaman contact')
});


app.get('/product/:id',(req ,res) => {
    
    res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.query.category}`) ;
}) 


app.use('/',(req,res) =>{
    res.status(404)
    res.send('MAU NGEHACK DEK?')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

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

 


