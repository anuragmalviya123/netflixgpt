import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from "react";
import { Logo, SUPPORTED_LANGUAGE } from "./Constent";
import { toggleGptSearchView } from "../utils/gptSlice";
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

  const handleGptSerachClick = () => {
    dispatch(toggleGptSearchView());
  }
    return (
        <div >
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ...">
                 <img className = "w-40" src={Logo}alt="logo" />
                { user &&  (<div className="flex">
                  <select className="p-2 m-2 bg-gray-900 text-white">
                   {
                    SUPPORTED_LANGUAGE.map((lang) =>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))
                   }                   
                  </select>
                  <button className="px-4 rounded-lg m-2  py-2 bg-purple-800 text-white" onClick={handleGptSerachClick}>GPT Search</button>
                  <button className="px-4 rounded-lg m-2  py-2 bg-purple-800 text-white " onClick={handlesigout}>SignOut</button>
                 </div>
                )}
                
           </div>
          
        </div>

      
       
    )
}
export default Header