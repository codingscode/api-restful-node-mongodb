
// config inicial
const express = require('express')
const app = express()
const mongoose = require('mongoose')



// forma de ler JSON
app.use(
   express.urlencoded({
      extended: true
   })
)

app.use(express.json())

// rota inicial / endpoint
app.get('/', (req, res) => {
   // mostrar req
   
   
   res.json({ message: 'Oi Express!' })
})


// entregar uma porta
const DB_USER = 'hp'
const DB_PASSWORD = encodeURIComponent('AC1eaLzMIROybwVB')

mongoose.connect('mongodb://localhost:27017/?directConnection=true')
.then( () => {
   console.log('Conectamos ao mongodb!')
   
   
   app.listen(3000)
} )
.catch( (err) => console.log(err) )


//app.listen(3000)

//mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xlcvivo.mongodb.net/bancoapi?retryWrites=true&w=majority`)










