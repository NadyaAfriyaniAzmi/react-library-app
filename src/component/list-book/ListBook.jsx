import React, { Fragment } from 'react'
import "./listBook.css"
const ListBook = ({image}) => {
  return (
    <Fragment>
      
         <div className="listbook-card"> 
         <div className="listcard" >
           <img src={image} alt="" className=''/>
           <div className="listbook-text">
           <h3>Dilan 1990</h3>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>       
          </div>
       </div>
  {/* //       <div className="listcard">
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
  //     </div> */}
  {/* //   </div> */}
  </div>
    </Fragment>
  )
}

export default ListBook