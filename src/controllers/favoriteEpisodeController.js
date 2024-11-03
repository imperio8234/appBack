const episodes = require("../models/model.episode")

const saveEpisode = async (req, res) => {
    const  episode = req.body;
    try {
        const episodeDB = await episodes.find({"datos.episode.id":episode.id, "datos.episode.idUser": episode.idUser})
        if(episodeDB.length > 0){
            return;
        }
     const newEpisode =  new episodes({datos: {episode}});
     await newEpisode.save().then((result) => {
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

const getEpisodes = async (req, res) =>{
    try {
      const episodesDb =  await episodes.find();
      if (!episodesDb) {
        res.status(404).json({
            success: false,
            message: "no se encontraron favoritos"
        })
        return;
      }
      const newData =[].concat(...episodesDb.map(item => item.datos.episode));
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

const optenerEpisode = async (req, res) => {
    const id = req.params.id;
    
try {
    console.log("opteniendo episodio")
   const newEpisode = await episodes.find({"datos.episode.idUser": id});
   //console.log(newEpisode)
   if (!newEpisode) {
    res.status(404).json({
        success: false,
        message: "no se encontraron favoritos"
    })
    return;
   }
   const newData =[].concat(...newEpisode.map(item => item.datos.episode));

   res.status(200).json({
    success:true,
    message: "favoritos encontrados",
    data:newData
   })

   console.log("episodio optenido exitosamente")
} catch (error) {
    res.status(500).json({
        success: false,
        message:error
    })
}
}


const updatepisode = () => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
        
    }
}

const deleteEpisode = async (req, res) => {
    const id = req.params.id
    const userId = req.params.iduser
    console.log(id, userId)
    try {
        const result= await episodes.find()
        console.log(result)
         await episodes.deleteOne({
             "datos.episode.id": parseInt(id), 
            "datos.episode.idUser": userId       
        })
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
        res.status(500).json({
            message: error,
            success: false
        })
    }
}
 
module.exports= {
    saveEpisode,
    getEpisodes,
    deleteEpisode,
    optenerEpisode
}