const express = require('express');
const app = express();
const PORT = 3000;

//Metodo Get= que es una rulta / significa que esta en la raiz
// tenemos dos parametros req y el res
//req es la solicitud
//res es para responder 
//el parametro de ruta lo defino aca (/:en esta parte le doy un nombre )
app.get('/:miparametro', (req, res)=>{
   const miparametro= req.params.miparametro;
   res.send('ola como estas desde express....'+ miparametro);

});

//segunda forma de obtener parametros:
//en la constanta el valor siempre va a venir del req.
// voy a poner req.query porque viene de un queryString
//para que este funcione debes de 

app.get('/queryString',(req, res)=>{
    const valor =req.query.valor;
    res.send(`El valor es: ${valor}`)    //(`` esas comillas asi significa interpolar)
});

app.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);

});

// vamos  a instalar un npm install nodemon
