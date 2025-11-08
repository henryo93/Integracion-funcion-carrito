
const { DataTypes } = require('sequelize')
const sequelize= require('../db/Conexion')
const Producto = require('./Producto')

const Carrito =sequelize.define('carrito',{
    id :{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idProducto:{
        type: DataTypes.INTEGER
    }
},{
    tableName:'carrito',
    timestamps:false
})

Carrito.belongsTo(Producto, {
    foreignKey: 'idProducto',
    targetKey: 'id'
});

module.exports=Carrito;