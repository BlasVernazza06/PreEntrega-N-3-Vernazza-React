const CartWidget = ({counter}) => {  
    return (
      <>
        <div className='cartSection'>
          <img src="./icons8-carrito-de-compras-32.svg"/>
          <p className="counterCartWidget">{counter}</p>
        </div> 
      </>
    )
}

export default CartWidget
