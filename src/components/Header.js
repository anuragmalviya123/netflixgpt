import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from "react";
import { Logo } from "./Constent";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handlesigout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    useEffect( () => {
       const unSubcribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid: uid , email: email, displayName: displayName, photoURL: photoURL}));
              // ...
              navigate("/browse")
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/")

            }
          });
          return () => unSubcribe();
     }, []);
    return (
        <div >
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ...">
                 <img className = "w-40" src={Logo}alt="logo" />
                { user &&  (<div className="flex">
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... py-2 m-4  left-10 bg-red-700 px-16  rounded-lg bg-black text-white border-2 border-indigo-600 flex " onClick={handlesigout}>SignOut</button>
                 </div>
                )}
                
           </div>
          
        </div>

      
       
    )
}
export default Header