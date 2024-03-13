import { useRef, useState } from "react";
import {checkvalidate} from "../utils/Validate";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Back } from "./Constent";


const Login = () => {
    const [IsLogged, setIsLogged] = useState(true);
    const [manage,setmanage] = useState(" ");
   const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const notregistered = () => {
        if (IsLogged) {
            setIsLogged(!IsLogged);
        }
        else
            setIsLogged(!IsLogged);

    }

    const handleClick = () => {
        const message = checkvalidate(email.current.value,password.current.value);
        setmanage(message);

        if(message)
        {
            return;
        }

        if(!IsLogged) {
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
           .then((userCredential) => {
             // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: email.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid , email: email, displayName: displayName, photoURL: photoURL}));
                // ...
              }).catch((error) => {
                setmanage(error.code);

              });


            //

             // ...
          })
             .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setmanage(errorCode);

             // ..
          });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
             // Signed in 
            const user = userCredential.user;

             // ...
            })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setmanage(errorCode);

            });
        }


    }
    return (
        <div>
            <div>
                <Header />
                <div className="absolute">
                    <img src={Back} alt="logo" />
                </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 opacity-80 rounded-lg ">
                <h1 className="text-rose-50 font-bold ... px-20">{IsLogged ? "Sign In" : "Sign Up"}</h1>
                {!IsLogged ? <input type="text"  className="py-2 m-4  w-full rounded-lg  bg-black text-white border-2 border-indigo-600" placeholder="Name" /> : " "}
                <input type="text" ref={email} className="py-2 m-4  w-full rounded-lg  bg-black text-white border-2 border-indigo-600" placeholder="Email Address" />
                <input type="password" ref={password}  className="py-2 m-4  w-full rounded-lg   bg-black text-white border-2 border-indigo-600" placeholder="Password" />
                <p className="text-rose-50 font-bold ...  ">{manage}</p>
                <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... py-2 m-4  left-10 bg-red-700 px-16 w-full rounded-lg bg-black text-white border-2 border-indigo-600 " onClick={handleClick}>{IsLogged ? "Sign In" : "Sign Up"}</button>
                <p className="text-rose-50 font-bold ... px-20 cursor-pointer" onClick={notregistered}>{IsLogged ? "New User" : "Already_User/_SignIn"}</p>
            </form>
        </div>
    )
}
export default Login