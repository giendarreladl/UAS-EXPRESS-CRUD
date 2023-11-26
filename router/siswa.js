const express = require('express');
const router = express.Router()
const usercontoller = require('../controller/insertdata')

router.get('/siswa', usercontoller.get)

router.get('/siswa/:id', usercontoller.getid)

router.post('/tambah', usercontoller.post)

router.put('/update/:id', usercontoller.put)

router.delete('/delete/:id', usercontoller.del)

module.exports = router;