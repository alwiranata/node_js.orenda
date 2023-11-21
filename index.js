// const nama = 'aldo wiranata';

// const cetakNama = (nama) => `Hi nama saya ${nama}`;

// console.log(cetakNama(nama))
// const fs = require('fs');//core module
// const cetakNama = require('./coba'); //import local module
// const moment = require('moment'); //third party module /  npm module / node_module
const  coba = require('./coba');
console.log(coba.cetakNama('aldo'), coba.PI, coba.mhs.cetakMhs() , new coba.Orang());
