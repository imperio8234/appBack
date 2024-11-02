const users = require("../models/model.user");

const createUser = async (req, res) => {
    const usuario = req.body;
    const newUsuario = new users(usuario);
    try {
       const usuarioVerify =  await users.find({"nombre": usuario.nombre});
        if (usuarioVerify.length > 0) {
            res.json({
                success: false,
                message: "ya estas registrado ",
                data:usuarioVerify
            })
            return;
        }
       await newUsuario.save()
        .then((result) => {
           res.status(200).json({
            success: true,
            data:result
           })
        })

    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}
const deleteUser = (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}
const getUser = (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}
const updateUser = (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}


module.exports= {
    createUser,
    deleteUser,
    updateUser,
    getUser
}