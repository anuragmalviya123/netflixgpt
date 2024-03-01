import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Body = () => {
    const appRoute = createBrowserRouter([
           {
             path:"/",
             element:<Login/>
           },
           {
            path:"/Browse",
            element:<Browse/>
           }
    ]);
    return (
        <div>
           <RouterProvider router={appRoute}/>
           <Header/>
           <div className="  bg-black-6">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
           </div>
           
        </div>
    )
}
export default Body;