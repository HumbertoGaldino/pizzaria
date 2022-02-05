const fs = require('fs');
const path = require('path');

const usuariosController = {
    cadastrar: (req,res) => {
        const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'banco.json'), {
            encoding: 'utf-8'
        }); //LÊ O ARQUIVO DO BD, É RECEBIDO COMO STRING, PORTANTO A LINHA ABAIXO CONVERTE PARA JSON
        
        const objeto = JSON.parse(arquivo); //CONVERTE DE STRING PARA OBJETO E ARMAZENA NA CONSTANTE
     
        const novoUsuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            eh_admin: false
        }; //COLETA AS INFORMAÇÕES ENVIADAS NO FORMULÁRIO
    
        objeto.usuarios.push(novoUsuario); //INSERE O NOVO USUÁRIO NO OBJETO NA PROPRIEDADE USUÁRIOS QUE É UM ARRAY
    
        const objetoEmString = JSON.stringify(objeto); //TRANSFORMA O OBJETO EM STRING NOVAMENTE
    
        fs.writeFileSync(path.join(__dirname, '..', 'database', 'banco.json'), objetoEmString); //PASSA O CAMINHO DO ARQUIVO QUE SERÁ ARMAZENADO OS DADOS + OS DADOS A SEREM GRAVADAS
    
        console.log(req.body);
        res.send(objeto.usuarios);
    },
    exibeFormularioCadastro: (req,res)=>{
        res.render('cadastrar');
    }
};

module.exports = usuariosController;