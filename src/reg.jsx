import { useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import { AuthContext } from "./AuthContext";
function Register(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [error,setError]=useState("");
    const nav=useNavigate();
    const {reg}=useContext(AuthContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name||!email||!pass){
            setError("همه ی فیلد ها را پر کنید.");
            return;
        }
        const result=reg(name,email,pass);
        if(result.success){
            nav('/');
        }
        else{
            setError(result.massage)
        }
    };
    return(
        <div>
            <h2>ثبت نام</h2>
            <form onSubmit={handleSubmit}>
                {error&&<p style={{color:'red'}}>{error}</p>}
                <div>
                    <label>name:</label>
                    <input type="text" value={name} 
                    onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div>
                    <label>email:</label>
                    <input type="email" value={email}
                    onChange={(e)=>setEmail(e.target.value) }required />
                </div>
                <div>
                    <label>password:</label>
                    <input type="password" value={pass} 
                    onChange={(e)=>setPass(e.target.value)}required />
                </div>
                <button type="submit">ثبت نام</button>
            </form>
        </div>
    )

}; 
export default Register;