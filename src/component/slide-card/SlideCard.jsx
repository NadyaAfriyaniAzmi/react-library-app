import React, { Fragment } from 'react'
import uburlemburPhoto from "../../assets/cov-lembur.png";
import laskarPhoto from "../../assets/laskar.jpg";
import "./slideCard.css"
 const SlideCard = ({image,judul,penulis}) => {
  return (
    <Fragment>
      <section>
       <div className=''>
       <div className="card">
           <img src={image} alt="" className="img-lembur" id=""/>
           <div className=" text-card">
             <h3>{judul}</h3>
             <p>{penulis}</p>
           </div>
          </div>
        {/* <div className="card">
           <img src={uburlemburPhoto} alt="" className="img-lembur" id=""/>
           <div className=" text-card">
             <h3>Ubur-ubur lembur</h3>
             <p>Raditya Dika</p>
           </div>
         </div> */}
         {/* <div className="card">
             <img src={laskarPhoto} alt="" className="img-laskar"/>
             <div className=" text-card">
              <h3>Laskar Pelangi</h3>
              <p>Andrea Hirata</p>
            </div>
         </div> */}
         </div>
        </section>
    </Fragment>
  )
}

export default SlideCard
