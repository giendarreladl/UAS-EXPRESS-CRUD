const express = require('express')
const app = express()
const RouteSiswa = require('./router/siswa')
const ConfigDB = require('./config/mongoose')
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(RouteSiswa)
ConfigDB()

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})