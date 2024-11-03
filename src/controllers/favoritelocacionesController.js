const locations = require("../models/model.locations")

const saveLocation = async (req, res) => {
    const  Location = req.body;
    try {
        const locationDB = await locations.find({"datos.location.id":Location.id, "datos.location.idUser": Location.idUser})
        if(locationDB.length > 0){
            return;
        }
     const newLocation =  new locations({datos: {Location}});
     await newLocation.save().then((result) => {
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

const getLocations = async (req, res) =>{
    try {
      const LocationsDb =  await locations.find();
      if (!LocationsDb) {
        res.status(404).json({
            success: false,
            message: "no se encontraron favoritos"
        })
        return;
      }
      const newData =[].concat(...LocationsDb.map(item => item.datos.location));
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

const optenerLocation = async (req, res) => {
    const id = req.params.id
    
try {
    console.log("opteniendo locacion")
   const newLocation = await locations.find({
    "datos.location.idUser":id});
   if (!newLocation) {
    res.status(404).json({
        success: false,
        message: "no se encontraron favoritos"
    })
    return;
   }
   const newData =[].concat(...newLocation.map(item => item.datos.location));

   res.status(200).json({
    success:true,
    message: "favoritos encontrados",
    data:newData
   })
   console.log("locacion optenida")
} catch (error) {
    res.status(500).json({
        success: false,
        message:error
    })
}
}


const updatLocation = () => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
        
    }
}

const deleteLocation = async (req, res) => {
    const id = req.params.id
    const iduser = req.params.iduser
    try {
        locations.deleteOne({"datos.location.id": parseInt(id), "datos.location.idUser":iduser})
        .then((resultado) => {
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
        res.status(500).json({
            message: error,
            success: false
        })
    }
}
 
module.exports= {
    saveLocation,
    getLocations,
    deleteLocation,
    optenerLocation
}