const personajes = require("../models/model.favoritePersonaje")

const savePersonaje = async (req, res) => {
    const  personaje = req.body;
    try {
        const personajeDB = await personajes.find({"datos.personaje.id":personaje.id, "datos.personaje.idUser": personaje.idUser})
        if(personajeDB.length > 0){
            return;
        }
     const newPersonaje =  new personajes({datos: {personaje}});
     await newPersonaje.save().then((result) => {
           if (result) {
            res.status(200).json({
                success: true,
                message: "se guardo en favoritos"
            })
           }
     })
    } catch (error) {
        
        res.status(500).json({
            message: error,
            success: false
        })
    }

}

const getPersonajes = async (req, res) =>{
    try {
      const personajesDb =  await personajes.find();
      if (!personajesDb) {
        res.status(404).json({
            success: false,
            message: "no se encontraron favoritos"
        })
        return;
      }
      const newData =[].concat(...personajesDb.map(item => item.datos.personaje));
       res.json({
        success: true,
        data: newData
       })
    } catch (error) {
        
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

const optenerPersonaje = async (req, res) => {
    const id = req.params.id
    const idUser = req.params.id
try {
   const newPersonaje = await personajes.find({"datos.personaje.idUser": id});
   if (!newPersonaje) {
    res.status(404).json({
        success: false,
        message: "no se encontraron favoritos"
    })
    return;
   }
   const newData =[].concat(...newPersonaje.map(item => item.datos.personaje));

   res.status(200).json({
    success:true,
    message: "favoritos encontrados",
    data:newData
   })
} catch (error) {
    res.status(500).json({
        success: false,
        message:error
    })
}
}


const updatPersonaje = () => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
        
    }
}

const deletePersonaje = async (req, res) => {
    const id = req.params.id
    const iduser = req.params.iduser
    console.log(id, iduser)
    try {
      await personajes.deleteOne({"datos.personaje.id":parseInt(id) , "datos.personaje.idUser": iduser})
        .then((resultado) => {
            console.log(resultado)
            if (resultado.deletedCount > 0) {
                res.status(200).json({
                    message: "favorito eliminado con éxito",
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "favorto no encontrado",
                    success: false
                })
            }
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error,
            success: false
        })
    }
}
 
module.exports= {
    savePersonaje,
    getPersonajes,
    deletePersonaje,
    optenerPersonaje
}