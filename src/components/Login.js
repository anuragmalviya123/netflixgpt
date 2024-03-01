const Login = () => {
    return (
        <div>
            <form className="absolute h-64 w-80 bg-zinc-800 ms-96">
                    <h1  className ="ms-20 mt-20"> Sign In</h1>
                  <input  className ="ms-20 mt-20" type="text" name="username" />
                  <input  className ="ms-20 mt-6" type="password" name="password" />
                  <input className ="ms-20 mt-6" type="submit" value="Submit" />
           </form>
        </div>
    )
}
export default Login;