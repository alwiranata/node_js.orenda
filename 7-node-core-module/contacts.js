
const fs = require ('node:fs');
const chalk =require('chalk');
const validator = require('validator');
//readline 
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// })

//membuat folder data jika belum ada

const dirPath ='./data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//membuat file json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]' ,'utf-8');
}


// const tulisPertanyaan =(pertanyaan) =>{
//     return new Promise((resolve,reject) =>{
//         rl.question(pertanyaan ,(nama) => {
//             resolve(nama)
//         })
//     })
// }

const loadContact =()=>{
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}


const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf8');
    // const contacts = JSON.parse(fileBuffer);
    const contacts = loadContact

    // cek duplikat
    const isDuplicate = contacts.find((existingContact) => existingContact.nama === nama);
    if (isDuplicate) {
        console.log(chalk.red.inverse('Kontak sudah terdaftar menggunakan nama lain!'));
        return false;
    }

    // cek email
    if (email && !validator.isEmail(email)) {
        console.log(chalk.red.inverse('Email tidak valid!'));
        return false;
    }

    // cek No.HP
    if (noHP && !validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse('Nomor HP tidak valid!'));
        return false;
    }

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.green.inverse('Thanks your input data'));
};

const listContact = ()=>{
 const contacts = loadContact();
 console.log(chalk.cyan.inverse.bold('Daftar Kontak :'))
 contacts.forEach((contact, i) =>{
    console.log(`${i + 1} ${contact.nama} - ${contact.noHP}`);
 });

};

const detailContact = (nama) =>{
    const contact =loadContact();
};

module.exports = { simpanContact ,listContact ,detailContact };
