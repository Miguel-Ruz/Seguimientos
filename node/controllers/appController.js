//importamos el modelo
import seguimientosModel from "../models/appModel.js";

// Metodos para el crud

//Mostrar todos los registros
export const getAllSeguimientos = async (req, res) => {
    try {
        const seguimientos = await seguimientosModel.findAll()
        res.json (seguimientos)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

//Mostrar un registro
export const getSeguimiento = async (req, res) => {
    try {
        const seguimiento = await seguimientosModel.findAll ({
            where: {
                id:req.params.id
            }
        })
        res.json (seguimiento[0])
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

//crear un registro 
export const createSeguimiento = async (req, res) => {
    try {
        await seguimientosModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente!"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

//Actualizar un registro
export const updateSeguimiento = async (req, res) => {
    try {
        await seguimientosModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"Registro modificado correctamente!"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteSeguimiento = async (req, res) => {
    try {
        await seguimientosModel.destroy({
            where: { id : req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}