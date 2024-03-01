import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [IsLogged,setIsLogged] = useState(true);
    const notregistered = () => {
           if(IsLogged){
            setIsLogged(!IsLogged);
           }
           else
           setIsLogged(!IsLogged);

    }
    return (
        <div>
            <div>
                <Header />
                <div className="absolute">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" />
                </div>
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 opacity-80">
                <h1 className="text-rose-50 font-bold ... px-20">{IsLogged ? "Sign In" : "Sign Up"}</h1>
                <input type="text" className="py-2 m-4  w-full" placeholder="Email" />
                <input type="password" className="py-2 m-4  w-full" placeholder="Password" />
                <button className="py-2 m-4  left-10 bg-red-700 px-16 w-full">{IsLogged ? "Sign In" : "Sign Up"}</button>
                <p className="text-rose-50 font-bold ... px-20" onClick={notregistered}>{IsLogged ? "New User" : "Already User"}</p>
            </form>
        </div>
    )
}
export default Login