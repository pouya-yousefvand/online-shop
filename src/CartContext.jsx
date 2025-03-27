import { createContext,useState } from "react";
export const CartContext=createContext();
export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const addToCard=(product)=>{
        setCart(prevCart=>{
            const existing=prevCart.find(item=>item.id===product.id);
            if(existing){
                return(prevCart.map(item=>
                    item.id===product.id?{...item,quantity:item.quantity+1}:item
                ));
            
            }
            else{return[...prevCart,{...product,quantity:1}]}

        })
    };
    const removeFromCart=(productId)=>{
        setCart(prevCart=>prevCart.filter(item=>item.id!==productId))
    };
    return(
        <CartContext.Provider value={{cart,addToCard,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );

}