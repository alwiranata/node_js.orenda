//core module
//file system
const { error } = require('node:console')
const fs = require ('node:fs')

//menuliskan string ke file (synchronus)
// try{
//     fs.writeFileSync('data/test.txt','hello world secara syncronus')

// } catch(e){
//     console.log(e)
// }

//menulsikan string ke file secara (asynchronous)
// fs.writeFile('data/test.txt','Hello World secara Asynchronus' ,(err) => {
//     console.log(err)
// })

//membaca isi file(syncronus)
// const data = fs.readFileSync('data/test.txt','utf8');
// console.log(data)


//membaca isi file(asynchronus)
// console.log('Mulai membaca file')

// fs.readFile('data/test.txt','utf8',(err, data)=>{
//     if (err)throw err;

//     setTimeout(()=>{  
//         console.log(data);
//     },2000)
    
// })

// console.log('Menuggu file...')

//readline 
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})


rl.question('Masukkan nama anda : ',(nama) =>{
    rl.question('Masukkan no HP anda :',(noHP)=>{
        const contact ={nama, noHP }
        const file= fs.readFileSync('data/contacts.json', 'utf8' );
        const contacts = JSON.parse(file);

        contacts.push(contact);
        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
        console.log('Thanks your input data')
        rl.close();
    })
    
    
})


