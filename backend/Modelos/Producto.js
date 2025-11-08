
const { DataTypes } = require('sequelize')
const sequelize= require('../db/Conexion')

const Producto =sequelize.define('producto',{
    id :{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombreProducto:{
        type: DataTypes.STRING
    },
    precioProducto:{
        type: DataTypes.DOUBLE
    },
    isvProducto:{
        type:DataTypes.DOUBLE
    },
    imgProducto:{
        type:DataTypes.STRING
    }
},{
    tableName:'producto',
    timestamps:false
})

module.exports=Producto;