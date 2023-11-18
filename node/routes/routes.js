import express from 'express'
import { getAllSeguimientos, getSeguimiento, createSeguimiento, updateSeguimiento, deleteSeguimiento } from '../controllers/appController.js'

const router = express.Router()

//metodo para traer todos los seguimientos
router.get('/', getAllSeguimientos)

//metodo para mostrar un solo seguimiento 
router.get('/:id', getSeguimiento)

//metodo para crear un seguimiento
router.post('/', createSeguimiento)

//metodo para actualizar un seguimiento
router.put('/:id', updateSeguimiento)

//metodo para eliminar un seguimiento
router.delete('/:id', deleteSeguimiento)

export default router
