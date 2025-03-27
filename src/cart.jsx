import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import { Link } from "react-router-dom";
function Cart(){
    const {cart,removeFromCart}=useContext(CartContext);
    const totalPrice=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
    return(
        <div>
            <h1>سبد خرید</h1>
            {cart.lenght===0?(<div>
                سبد خالی است.
                <br/>
                <Link to="/">بازگشت به محصولات</Link>
            </div>):(<div>
                <ul>
                    {cart.map(item=>
                        <li key={item.id}>
                            {item.name}-{item.price}تومان x {item.quantity}
                            <button onClick={()=>removeFromCart(item.id)}>
                                حذف
                            </button>
                        </li>
                    )}
                </ul>
                <h3>جمع کل:{totalPrice}</h3>
                <Link to="/">ادامه خرید</Link>
            </div>)}
        </div>
    );
}
export default Cart;