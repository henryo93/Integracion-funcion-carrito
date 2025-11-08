const {Sequelize}=require('sequelize');

const sequelize= new Sequelize(
    'ecomerse',
    'root',
    'admin123',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=>console.log('Conexion a la BD correcta'))
    .catch(erro => console.log('Ocurrio un error'+ erro));

module.exports=sequelize;

