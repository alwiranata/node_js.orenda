function cetakNama(nama) {
    return `nama saya ${nama} `;
}
const PI = 3.14;

const mhs = {
    nama : 'aldo wiranata',
    umur : 17,
    cetakMhs(){
        return `Halo nama saya  ${this.nama} dan umur saya ${this.umur} tahun`;
    },
}

class Orang{
    constructor(){
        console.log('Objek Orang telah di buat!')
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mhs = mhs;
// module.exports.Orang = Orang;
//
// module.exports ={
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     Orang : Orang
// }
//
module.exports = {cetakNama , PI , mhs ,Orang}
