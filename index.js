
// config inicial
const express = require('express')

const app = express()
const mongoose = require('mongoose')

const Person = require('./models/Person')


// forma de ler JSON
app.use(
   express.urlencoded({
      extended: true
   })
)

app.use(express.json())

// rotas da API
app.post('/person', async (req, res) => {
   
   // req.body
   const { name, salary, approved } = req.body
   
   // {name: 'Matheus', salary: 5000, approved: false}

   if (!name) {
      res.status(422).json({ error: 'O nome é obrigatório' })
   }
   
   const person = { name, salary, approved }
   // create
   
   try {
      // criando dados
      await Person.create(person)
      
      res.status(201).json({ message: 'Pessoa inserida com sucesso!' })
      
   }
   catch(error) {
      res.status(500).json({ error: error })
   }
   
   
})


// rota inicial / endpoint
app.get('/', (req, res) => {
   // mostrar req
   
   
   res.json({ message: 'Oi Express!' })
})


// entregar uma porta
const DB_USER = 'hp'
const DB_PASSWORD = encodeURIComponent('AC1eaLzMIROybwVB')

mongoose.connect('mongodb://localhost:27017/exemploapi?directConnection=true')
.then( () => {
   console.log('Conectamos ao mongodb!')
   
   
   app.listen(3000)
} )
.catch( (err) => console.log(err) )










