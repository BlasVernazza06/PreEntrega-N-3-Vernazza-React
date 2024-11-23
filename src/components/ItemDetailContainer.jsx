import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../mock/data'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(()=> {
     setLoading(true)
     getOneProduct(id)
     .then((res)=> setProducto(res))
     .catch((error) => console.log(error))
     .finally(() => setLoading(false))
  },[id])


  const onAdd = (cantidad) => {
     if (producto.stock >= cantidad) {
          console.log(`Agregaste al carrito ${cantidad} productos`)
          producto.stock -= cantidad
          console.log(`El stock actual es ${producto.stock}`);
          
     } else {
          console.log(`No es posible comprar dicha cantidad, el stock no es suficiente`)
     }
  }
  

     return (
          <>
               <div className="cardContainer">
                    {loading ? 
                    <div className="loadMessage">
                         <p>Cargando...</p>
                    </div> :
                    <ItemDetail producto={producto} stock={producto.stock} onAdd={onAdd}/>}
               </div> 
          </>
     )
}

export default ItemDetailContainer