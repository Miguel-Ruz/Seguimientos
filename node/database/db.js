import { Sequelize } from "sequelize";

const db = new Sequelize('crud_final', 'root', '3187361737migueL', {
    host: 'localhost', 
    dialect: 'mysql'
} )

export default db