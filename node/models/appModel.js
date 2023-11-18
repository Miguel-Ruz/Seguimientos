import db from "../database/db.js";
//importamos la conexion a la db

import { DataTypes } from "sequelize";

const seguimientosModel = db.define ('seguimientos', {
    semana: { type: DataTypes.NUMBER},
    Fecha: { type: DataTypes.DATE},
    tema: { type: DataTypes. STRING},
    metodologia: { type: DataTypes. STRING},
    horas: { type: DataTypes. NUMBER}
})

export default seguimientosModel