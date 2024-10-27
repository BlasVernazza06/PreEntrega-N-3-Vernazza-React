const ItemListContainer = ({h1, span}) => {
    return(
        <div className="grid-StartSection">
            <div className="StartTextSection">
                <h1 className="title">{h1}<span>{span}</span></h1>
                
                <div className="Startbuttons">
                    <button className="Start"><a href="pages/Productos.html">Empezar</a></button>
                    <button className="More">Mas</button>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer