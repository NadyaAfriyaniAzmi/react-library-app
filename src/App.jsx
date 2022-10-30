import {link, BrowserRouter, Route, Routes} from "react-router-dom";

import Login from"./pages/login/Login";
import Register from "./pages/register/Register";
import Home from"./pages/home/Home";


function Applib() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Applib;
