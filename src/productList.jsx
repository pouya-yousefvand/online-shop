import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
const products=[
    {id:1,name:"apple",price:100},
    {id:2,name:"orange",price:200},
    {id:3,name:"cucember",price:300}
];
function ProductList(){
    const {addToCard}=useContext(CartContext);
    return(
        <div>
            <h3>لیست محصولات</h3>
            <ul>
                {products.map(product=>
                    <li key={product.id}>{product.name}-{product.price}تومان
                    <button onClick={()=>addToCard(product)}>
                        افزودن به سبد خرید
                    </button>
                    </li>
                    
                )}
            </ul>
        </div>
    );
}
export default ProductList;