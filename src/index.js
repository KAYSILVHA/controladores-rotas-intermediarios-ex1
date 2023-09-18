const express = require('express');
const {listagemCarros, obterCarro} = require('./controladores/carros');
const {intermediarioVerificarSenha} = require('./intermediarios');
const app = express();


app.use(intermediarioVerificarSenha);
app.get('/carros', listagemCarros);
app.get('/carros/:id', obterCarro);

app.listen(3000,()=>{
  console.log("http://localhost:3000/")
})
