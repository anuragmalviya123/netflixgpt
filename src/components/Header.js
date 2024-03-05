import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handlesigout = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div >
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ...">
                 <img className = "w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
                { user &&  (<div className="flex">
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... py-2 m-4  left-10 bg-red-700 px-16  rounded-lg bg-black text-white border-2 border-indigo-600 flex " onClick={handlesigout}>SignOut</button>
                 </div>
                )}
                
           </div>
          
        </div>

      
       
    )
}
export default Header