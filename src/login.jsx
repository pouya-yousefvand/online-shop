import { useState,useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
function Login(){
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [error,setError]=useState("");
    const nav=useNavigate();
    const {login} =useContext(AuthContext);
    const handleSubmit=(e)=>{
        e.preventDefaulth();
        const result=login(email,pass);
        if (result.success){
            nav("/");
        }
        else{
            setError(result.massage);
        }
    };
    return(
        <div>
            <h2>ورود به حساب کاربری</h2>
            <form onSubmit={handleSubmit}>
             {error&&<p style={{color:'red'}}>{error}</p>}
             <div>
                <label>email:</label>
                <input type="email" value={email}
                 onChange={(e)=>setEmail(e.target.value)} required />
            </div> 
            <div>
            <label>password:</label> 
            <input type="password" value={pass} 
            onChange={(e)=>setPass(e.target.value)} required />   
            </div> 
            <button type="submit">ورود</button> 
            </form>
            
            
        </div>
    );
}
export default Login;