import ProductList from "./productList";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import Login from "./login";
import Register from "./reg";
import Cart from "./cart";
import { Routes,Route,Link } from "react-router-dom";
function App(){
    const {user,logout}=useContext(AuthContext);
    return(
        <div>
            <nav>
                <Link to="/">محصولات</Link>|
                <Link to="/cart">سبد خرید</Link>|
                {user?
                (<>
                <p>خوش آمدید {user.name}</p>
                <button onClick={logout}>خروج</button>
                </>):
                (<>
                <Link to="/login">ورود</Link>|
                <Link to="/reg">ثبت نام</Link>|
                </>)}
            </nav>
            <Routes>
                <Route path="/" element={<ProductList />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/reg" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </div>
    );
}
export default App;