const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan Isi Nomor induk siswa'],
        unique: true
    },
    nama: {
        type: String,
        required: [true, 'Silahkan Isi Nama'],
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan Isi Kelas'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [ /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/]
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan Isi alamat'],
    },
    telepon: {
        type: String,
        required: [true, 'Silahkan Isi no hp'],
    }
})

module.exports = mongoose.model('User', userSchema)