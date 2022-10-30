import { Link } from "react-router-dom";
import "./Login.css"

import perpusPhoto from "../../assets/perpus.png";
import logo from "../../assets/bookshelf.png";

const login = () =>{
    return(
        <div className="container">
        <div className="img-content">
          <h1>Book is a window to the world</h1>
          <h3>Photo by Mark Pan4ratte on Unsplash</h3>
          <img src={perpusPhoto} alt="gambar" />
        </div>
        <div >
          <div className="img-icon">
            <img src={logo} alt="gambar-icon" />
          </div>
          <div className="form">
            <div className="form-text">
              <h2>Login</h2>
              <p>Welcome back, Please Login to your account</p>
            </div>
            <div className="form-login">
              <div className="form-input">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-input">
                <label htmlFor="email">Password</label>
                <input type="Password" name="email" id="password" />
              </div>
              <div className="form-remb">
                <div>
                  <input type="checkbox" name="" id=""/>
                  <label htmlFor="remember me">Remember me</label>
                </div>
                <div>
                   <Link to={"/"}>Forgot Password</Link>
                </div>
              </div>
              <div className="button-content">
                <Link to={"/home"} className="btn-login">Login</Link>
                <Link to={"/register"} className="btn-signup">Sign up</Link>
              </div>
            </div>
            <div className="text">
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

export default login;