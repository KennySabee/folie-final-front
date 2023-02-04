import {useState, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])
    const addItemToCart = (shopping)=>{
        !shopping.quantity && (shopping.quantity=1)
        const productInCart = cart.find((item)=> item._id === shopping._id);
        if(productInCart){
          const newCart = cart.map((item)=>{
            if(item._id === shopping._id){
              return{
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          })
          setCart(newCart);
          return;
        }
        setCart([...cart, shopping]);
        
      }
    const data = {
        cart,
        setCart,
        addItemToCart
    }

        return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
