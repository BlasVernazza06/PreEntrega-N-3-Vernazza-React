import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../mock/data"

const ItemListContainer = ({greeting, span}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        getProducts()
        .then((res) => setProductos(res))
        .catch((error) => new Error(error))
        .finally(() => setLoading(false))
    },[])

    console.log(productos)

    const onAdd = (cantidad) => {
        console.log(`Agregaste al carrito ${cantidad} productos`)
    }

    return(
        <>
            <div className="grid-StartSection">
                <div className="StartTextSection">
                    <h1 className="title">{greeting} <span>{span}</span></h1>
                        
                    <h2 className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Fugiat porro dolore enim corrupti, non rem similique veniam, officia alias 
                            repellat officiis ducimus eos perferendis id eum quos sed, nisi temporibus.</h2>
                            
                    <div className="Startbuttons">
                        <button className="Start"><a href="#shop-sec">Empezar</a></button>
                        <button className="More">Mas</button>
                    </div>
                </div>
            </div> 

            <div id="shop-sec">
                {loading ? <p>Cargando...</p> : <ItemList productos={productos} stock={12} onAdd={onAdd}/>}
            </div>
        </>
    )
}

export default ItemListContainer;