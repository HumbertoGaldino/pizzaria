//ARQUIVO DE CONFIGURAÇÃO INICIAL DO PROJETO
const path = require('path');
const express = require('express'); //PACOTE

const pizzasRoutes = require('./routes/pizzas.routes');//IMPORTA ROTA PIZZAS

//CONFIGURAÇÕES DO SERVIDOR
const app = express(); //RETORNO DA FUNÇÃO EXPRESS

app.set('view engine','ejs'); //DEFINE O TIPO DE VIEW
app.set('views', path.join(__dirname, 'views')); //DEFINE A PASTA DAS VIEWS - __dirname(a partir da pasta que esta) + nome da pasta

app.use(pizzasRoutes); //DECLARA A ROTA PARA UTILIZAÇÃO NO ENDPOINT


app.listen(5000, () => console.log('Servidor em execução!'));