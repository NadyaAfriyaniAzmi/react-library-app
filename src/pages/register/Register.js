// import { Link}  from "react-router-dom";
import "./Register.css"

import perpusPhoto from "../../assets/perpus.png";
import logo from "../../assets/bookshelf.png";
import { useEffect,useState } from "react";

const Register = () => {
    const [person, setPerson] = useState([{
        userName: '',
        fullName: '',
        email: '',
        password: ''
    }])
    
    
    const handleSignup = (e) =>{
        e.preventDefault()
        localStorage.setItem("USER_LOGIN", JSON.stringify(person))
        localStorage.getItem('USER_LOGIN')
        console.log(person);
    }

    useEffect(() => {
        // handleSignup()
    },[person])

    return(
        <div className="container">
      <div className="img-content">
        <h1>Book is a window to the world</h1>
        <img src={perpusPhoto} alt="gambar" />
      </div>
      <div >
        <div className="img-icon">
          <img src={logo} alt="gambar-icon" />
        </div>
        <div className="form">
          <div className="form-text">
            <h2>Register</h2>
            <p>Welcome back, Please Login to your account</p>
          </div>
          <form className="form-login"  onSubmit={handleSignup}>
            <div className="form-input">
              <label htmlFor="username">Username</label>
              <input onChange={(e)=> setPerson({ ...person,userName: e.target.value})} type="text" name="username" id="username" />
            </div>
            <div className="form-input">
                <label htmlFor="fullname" >Fullname</label>
                <input onChange={(e) => setPerson({ ...person,fullName: e.target.value})} type="text" name="fullname" id="fullname" />
              </div>
            <div className="form-input">
                <label htmlFor="email">Email Address</label>
                <input onChange={(e) => setPerson({ ...person,email: e.target.value})} type="email" name="email" id="email" />
              </div>
            <div className="form-input">
              <label htmlFor="email">Password</label>
              <input onChange={(e) => setPerson({ ...person,password: e.target.value})} type="Password" name="Password" id="Password" />
            </div>
            <div className="button-content2">
              <button className="btn-signup2">Sign up</button>
              <button className="btn-login2">Login</button>
            </div>
          </form>
          <div className="text2">
            <p>
              By signing up, you agree to Book's
              <span>Terms and Conditions</span> & <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Register;