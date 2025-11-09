const express=require('express');
const Producto = require('./Modelos/Producto');
const Carrito = require('./Modelos/Carrito');
var cors = require('cors')


const app= express()

app.use(cors())

app.use(express.json());



//CRUD

//GET -- > extraer informacion
//POST --> extraer informacion , insertar informacion
//PUT --> actualuzaizar informaicno
//DELETE --> eliminar


//request --> recibe del cliente --> json
//response --> lo que respondes

//codigos de respuesta

//500  --> error
//403 o 401 --> error autenticacion
//200 o 201 --> fue exitoso
//400 o 4022 --> No hay informacion 


app.get('/producto',async(req, resp)=>{
  
    try {

        //select *from productos

        const listaProducto= await Producto.findAll();

        if(listaProducto.length>0)
            resp.status(200).json(listaProducto)
        else
            resp.status(200).json({'mensaje':'Sin datos para mostrarr'})
        
    } catch (error) {
        resp.status(500).json({'error':'Ocurrrio un error con la peticion'+error })
    }
});

app.post('/producto', async (req,resp)=>{

    try {

        console.log(req.body);

        //insert into product() vales(?,?,?)

        const proudcto= await Producto.create(req.body)
        resp.status(200).json({'mensaje':'Producto creado'})

        
    } catch (error) {
        resp.status(500).json({'error':'ocurrio un error al insertar'+error})
    }
})



app.put('/producto/:id',async (req,resp)=>{

    try {

        //update producto set nombre, isve where id=2
        const idProducto= req.params.id;

        const [updated]=await Producto.update(req.body,{
            where: {id:idProducto}
        });

        if(updated)
            resp.status(200).json({mensaje:'regsitro actualizado'})
        else
            resp.status(400).json({mensaje:'No se encontro registro para actualizar'})
        
    } catch (error) {
        resp.status(500).json({'error':'ocurrio un error al actualizar'+error})
    }
})

app.delete('/producto/:id',async(req,resp)=>{
    try {

        const idProducto= req.params.id;

        //delete from producto where id:1

        const deleted= await Producto.destroy({
            where:{id:idProducto}
        })

        if(deleted)
            resp.status(200).json({mensaje:'Eliminado correctamente'})
        else
             resp.status(400).json({mensaje:'No se encontro registro para eliminar'})

    } catch (error) {
        resp.status(500).json({'error':'ocurrio un error al eliminar'+error})
    }
})

// GET - Obtener todos los productos en el carrito
app.get('/carrito', async (req, resp) => {
    try {
        const listaCarrito = await Carrito.findAll({
            include: [{
                model: Producto,
                required: true,
                attributes: ['id', 'nombreProducto','isvProducto', 'precioProducto', 'imgProducto'] 
            }]
        });
        if (listaCarrito.length > 0)
            resp.status(200).json(listaCarrito);
        else
            resp.status(200).json({ 'mensaje': 'Sin datos en el carrito' });
    } catch (error) {
        resp.status(500).json({ 'error': 'Ocurrió un error con la petición: ' + error });
    }
});

// POST - Agregar un producto al carrito
app.post('/carrito', async (req, resp) => {
    try {
        const { idProducto } = req.body;

        // Verificar si el producto ya existe en el carrito
        const existingProduct = await Carrito.findOne({ where: { idProducto } });
        if (existingProduct) {
            return resp.status(400).json({ mensaje: 'El producto ya está en el carrito' });
        }

        const productoCarrito = await Carrito.create(req.body);
        resp.status(201).json({ 'mensaje': 'Producto agregado al carrito' });
    } catch (error) {
        resp.status(500).json({ 'error': 'Ocurrió un error al agregar al carrito: ' + error });
    }
});

// DELETE - Eliminar un producto del carrito
app.delete('/carrito/:id', async (req, resp) => {
    try {
        const idProducto = req.params.id;

        const deleted = await Carrito.destroy({
            where: { idProducto }
        });

        if (deleted)
            resp.status(200).json({ mensaje: 'Producto eliminado del carrito correctamente' });
        else
            resp.status(400).json({ mensaje: 'No se encontró el producto en el carrito' });
    } catch (error) {
        resp.status(500).json({ 'error': 'Ocurrió un error al eliminar del carrito: ' + error });
    }
});

app.listen(5000,()=>{
    console.log('Aplicacion ejecutando en puerto 5000')
});