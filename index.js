//ARQUIVO DE CONFIGURAÇÃO INICIAL DO PROJETO
const express = require('express'); //PACOTE

//CONFIGURAÇÕES DO SERVIDOR
const app = express(); //RETORNO DA FUNÇÃO EXPRESS

app.get('/', (req,res)=>{
    res.send('Chegou aqui!');
});

app.listen(5000, () => console.log('Servidor em execução!'));