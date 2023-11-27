
//Mengambil argumen dari command line

const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
    command: 'add',
    describe: 'Menambahkan Kontak Baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'NoHp',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama , argv.email , argv.noHP)
    
    },
   
})

.demandCommand();

//menampilkan daftar semua nama contact
yargs.command({
    command: 'list',
    describe: 'Menambahkan Kontak Baru',
   handler(){
    contacts.listContact();
   },
})

//menampilkan daftar semua nama contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder : {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
   handler(argv){
    contacts.detailContact(argv.nama);
   },
})


//menghapus contact berdasrkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder : {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
   handler(argv){
    contacts.deleteContact(argv.nama);
   },
})



yargs.parse();







//core module
//file system

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




// const pertanyaan2 =() =>{
//     return new Promise((resolve,reject) =>{
//         rl.question('Masukaan email anda : ' ,(email) => {
//             resolve(email)
//         })
//     })
// }

// const contacts = require('./contacts')


// const main = async () =>{
//     const nama = await contacts.tulisPertanyaan('Masukkan nama anda :')
//     const email =await contacts.tulisPertanyaan('Masukkan no Email anda :')
//     const noHp =await contacts.tulisPertanyaan('Masukkan no Hp anda :')
//    contacts.simpanContact(nama,email, noHp);
// }

// main();
// rl.question('Masukkan nama anda : ',(nama) =>{
//     rl.question('Masukkan no HP anda :',(noHP)=>{
//    const contact{nama ,noHP}
//         const fileBuffer= fs.readFileSync('data/contacts.json', 'utf8' );
//         const contacts = JSON.parse(file);

//         contacts.push(contact);
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
//         console.log('Thanks your input data')
//         rl.close();
        
//     })
// })


