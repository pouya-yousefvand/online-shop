import { createContext,useState } from "react";
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(()=>{
        const storedUser=localStorage.getItem('user');
        return storedUser?JSON.parse(storedUser):null;
    });
    const login=(email,pass)=>{
        const storedUser=localStorage.getItem('regUesr');
        if(storedUser){
            const regUser=JSON.parse(storedUser);
            if(regUser.email===email&&regUser.pass===pass){
                setUser(regUser);
                localStorage.setItem('user',JSON.stringify(regUser));
                return {success:true}
            }
        }
        return{success:false,massage:"رمز عبور یا ایمیل اشتباه است"}
    };
    const reg=(name,email,pass)=>{
        const newUser={name,email,pass};
        localStorage.setItem('regUser',JSON.stringify(newUser));
        setUser(newUser);
        localStorage.setItem('user',JSON.stringify(newUser));
        return {success:true};

    };
    const logout=()=>{
        setUser(null);
        localStorage.removeItem('user')

    };
    return(
        <AuthContext.Provider value={{user,login,reg,logout}}>
            {children}
        </AuthContext.Provider>
    );
};