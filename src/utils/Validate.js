  export const  checkvalidate = (email,password) => {
              const isemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
              const ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
              if(!isemail && !ispassword)
                return "Email or Password invalid"
             
              if(!isemail){
                return "Email is not valid"
              }
              if(!ispassword){
                return "Password is not valid"
              }
              return null;
  }