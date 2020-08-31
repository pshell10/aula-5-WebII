const fetch = require('node-fetch')

function converter(req,res){
    let url = 'https://economia.awesomeapi.com.br/USD-BRL/' 
   
    fetch(url)
    .then ( (dado) =>{
        return dado.json()
        console.log(valorFinal)
    })
    .then( (rows)=>{
        res.json(rows)
        valorFinal= res.high * req.params.valor_real
        console.log(valorFinal)
    })
}

module.exports = {converter}