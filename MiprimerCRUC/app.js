const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
//vamos a crear un objeto JSON
//lo que hago es reservar un espacio en memoria para que se pueda ejecutar. 
const users = [{nombre: "mario velasquez", edad:30, correo:"mavs17al@hotmail.com"},{nombre: "liliam pamela romero", edad:90, correo:"lilaimprome@hotmail.com"}]

//vamoa a reac, que es el obtener datos
//res= la respuesta que vamos a enviar
//req=todo lo que el usuario envia en la peticion que es no mas codigo
app.get("/user",(req, res)=>{

    res.status(200).json({status:200,message:"success",data: users});

});

//para poder filtrar los datos del JSON anterior 
//en este caso lo haremos por correo

app.get("/user/:correo",(req, res)=>{
    const correo = req.params.correo;
    let isActive= false;
   users.forEach(user=> {
     if(user.correo === correo){
        isActive= true;
        return res.status(200).json({status:200, message:"Success", data:user});

     }
   });

   if(!isActive){
    return res.status(400).json({status:404, message:"registro no encontrado", data:null})
    }
});

//con este hacemos el insert al objeto 
app.post("/user",(req, res)=>{
   const user = req.body;
   console.log(user);
   users.push(user); //me sirve para poder ingresar el nuevo registro a esa lista
   res.status(200).json({status:200, message:"Success", data:user});
});



//vamos a obtener los datos: 
//para que el servidor escuche en que puerto estamos trabajando
app.listen(port, ()=>{
    console.log(`el servidor de exprres esta escuchando en http://localhost:300:${port}`);
    });
