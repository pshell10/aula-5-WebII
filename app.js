//Exercicio Aula 5
//Aluno: Pedro Sheldon


const express = require('express')
const app = express()
const moeda = require('./models/moedas')


app.get('/alunos/todos', (req,res)=> {
    let alunos = [
        {
            "nome": "João",
            "sobrenome": "Pereira",
            "curso": "Sistemas de Informação",
            "semestre": "7º"
        },
    
        {
            "nome": "Lucas",
            "sobrenome": "Ferreira",
            "curso": "Sistemas de Informação",
            "semestre": "4º"
        },
        {
            "nome": "Maria",
            "sobrenome": "Silva",
            "curso": "Sistemas de Informação",
            "semestre": "2º"
        }
    
    ]
    res.json(alunos)



})


app.get('/moeda/:valor_real', moeda.converter)





app.listen(3000)