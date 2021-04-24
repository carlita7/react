import React from 'react'


export default function ItemListContainer(props) {
 return(
    <div className="row justify-content-center py-3 mw-100">  
        <div className="col-12 pb-4">
            <h1>Lista de Productos</h1>
        </div>
        <div className="col-10">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                    </div>
                </div>
                <Productos listaProductos = {props.props}/>
            </div>
        </div>             
    </div>
 )      
}

/*Item List*/
export function Productos(props){
  console.log(props)
  return(
    <div className="row" id="lista_productos"> 
      {
        /*props.listaProductos.map(
            (item,index) => <TarjetaProducto key={index} {...item}/>
          )*/

          props.listaProductos.map(producto => <li key={producto.codigo}>{producto.nombre}</li>)
      }
    </div>
  )
}


