function cetakNama(nama){
 return `nama saya ${nama}`;
}

const PI = 3.14;

const mhs = {
    nama : 'aldo',
    umur : 17,
    cetakMhs(){
        return`Halo nama saya ${this.nama} dan umur ${this.umur}`
    }
}

class Orang{
    constructor(){
        console.log('Objek Orang telah dibuat!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI  = PI;
// module.exports.mhs = mhs;
// module.exports.Orang = Orang;

// module.exports ={
//     cetakNama : cetakNama,
//     PI : PI,
//     mhs : mhs,
//     Orang : Orang,
// }

module.exports = {cetakNama , PI , mhs, Orang};
