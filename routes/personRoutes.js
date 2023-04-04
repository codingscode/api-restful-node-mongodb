
const router = require('express').Router()

const Person = require('../models/Person')


// create - criação de dados
router.post('/', async (req, res) => {
   
   // req.body
   const { name, salary, approved } = req.body
   
   // {name: 'Matheus', salary: 5000, approved: false}

   if (!name) {
      res.status(422).json({ error: 'O nome é obrigatório' })
      return
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

// read - leitura de dados
router.get('/', async (req, res) => {
   try {
      const people = await Person.find()
      
      res.status(200).json(people)
   }
   catch (err) {
      res.status(500).json({ error: error })
   }

})

router.get('/:id', async (req, res) => {

   // extrair o dado da requisição, pela url = req.params
   const id = req.params.id   
   
   try {
      const person = await Person.findOne({ _id: id })

      if (!person) {
         res.status(422).json({ message: 'O usuário não foi encontrado!' })
         return
      }

   
      res.status(200).json(person)
   }
   catch (err) {
      res.status(500).json({ error: err })
   }   

})


module.exports = router




