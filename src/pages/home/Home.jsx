import React, { Fragment,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

import logo from "../../assets/bookshelf.png";
import dilanPhoto from "../../assets/dilan.jpg";
import uburlemburPhoto from "../../assets/cov-lembur.png";
import laskarPhoto from "../../assets/laskar.jpg";
import seniPhoto from "../../assets/listbook-native3.jpg";
import nativePhoto from "../../assets/listbook-native2.jpg";
import profilePhoto from "../../assets/profil_Photo.png";
import iconsearch from "../../assets/iconsearch.png";
import dilanlist from "../../assets/covernyadilan.png";
import senilist from "../../assets/covernyanative.png";
import nativelist from "../../assets/covernyaseni.png";

import Sidebar from "../../component/sidebar/Sidebar";
import SlideCard from "../../component/slide-card/SlideCard";
import ListBook from "../../component/list-book/ListBook";


const Home = () => {
  // const[pokemons,setPokemons] = useState([])
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=3')
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response)
  //     setPokemons(response.results)
  //   })
  // },[])

    return(
        <Fragment>
          <main>
            <Sidebar/>
            <section className="slide-list">
            <section className="slide-card" >
              
              <SlideCard image={dilanPhoto} judul={"Dilan"}  penulis={"Pidi Baiq"}/>
              <SlideCard image={uburlemburPhoto} judul={"ubur"} penulis={"Raditya Dika"} />
              <SlideCard image={dilanPhoto} judul={"Dilan"} penulis={"Pidi Baiq"}/>
            </section>
            <h3 className="title-listbook">List Book</h3>
            <section className="list-book">
              <ListBook image={dilanlist}/>
              <ListBook image={senilist}/>
              <ListBook image={nativelist}/>
              </section>
            </section>
          </main>
        </Fragment>
  //       <div className="container">

  //       <div className="profil">
  //         <div className="img-profil">
  //           <img src={profilePhoto} alt=""/>
  //           <h2>Niki</h2>
  //         </div>
  //         <div className="profil-menu">
  //           <Link to={"/"}>Explore</Link>
  //           <Link to={"/"}>History</Link>
  //           <Link to={"/"}>Add Book</Link>
  //         </div>
  //       </div>
  //     <div className="content-book">
  //     <div className="navbar">
  //       <div className="nav-menu">
  //         <div className="nav-all">
  //           <p>All Categories</p>
  //           <p>All Time</p>
  //         </div>
  //         <div class="nav-search input-search">
  //           <div class="img-search">
  //             <img src={iconsearch} alt=""/>
  //           </div>
  //           <input type="search" placeholder="Search Book Here" />
  //         </div>
  //         <div className="nav-img">
  //           <img src={logo} alt="" />
  //           <h3>Library</h3>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="cover-card">
  //       {
  //         pokemons.map((value, index) => (
  //       <div key={index} className="card">
  //         <img src={dilanPhoto} alt="" className="img-dilan"/>
  //         <div className=" text-card">
  //           <h3>{value.name}</h3>
  //           <p>Pidi Baiq</p>
  //         </div>
  //       </div>

  //         ))
  //       }
  //       <div className="card">
  //         <img src={uburlemburPhoto} alt="" className="img-lembur" id=""/>
  //         <div className=" text-card">
  //           <h3>Ubur-ubur lembur</h3>
  //           <p>Raditya Dika</p>
  //         </div>
  //       </div>
  //       <div className="card">
  //           <img src={laskarPhoto} alt="" className="img-laskar"/>
  //           <div className=" text-card">
  //         <h3>Laskar Pelangi</h3>
  //         <p>Andrea Hirata</p>
  //       </div>
  //       </div>
  //     </div>

  //     <div className="list-book" >
  //       <h3>List Book</h3>
  //       <div className="listbook-card"> 
  //       <div className="listcard" >
  //         <img src={dilanPhoto} alt=""/>
  //         <div className="listbook-text">
  //         <h3>Dilan 1990</h3>
  //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, cum quisquam? Temporibus alias perspiciatis fuga tenetur repellendus commodi dolorum.</p>
  //       </div>
  //       </div>
  //       <div className="listcard">
  //         <img src={seniPhoto} alt=""/>
  //         <div className="listbook-text">
  //         <h3>Sebuah seni untuk</h3>
  //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum quisquam? Temporibus alias perspiciatis fuga tenetur repellendus commodi dolorum.</p>
  //       </div>
  //       </div>
  //       <div className="listcard">
  //         <img src={nativePhoto} alt=""/>
  //         <div className="listbook-text">
  //         <h3>Reach Native</h3>
  //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, cum quisquam? Temporibus alias perspiciatis fuga tenetur repellendus commodi dolorum.</p>
  //     </div>
  //   </div>
  // </div>
  //   </div>
  // </div>
  //   </div> 
    )
}
export default Home;