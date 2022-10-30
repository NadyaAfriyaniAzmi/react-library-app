import React,{Fragment} from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <Fragment>
       <section>
        <div className='section'>
        <div className='user'>
          <div className='foto'></div>
          <h1>Niki Zefanya</h1>
        </div>
        <div className='menu'>
          <ul>
            <li><a href="">Explorer</a></li>
            <li><a href="">History</a></li>
            <li><a href="">Add Book</a></li>
          </ul>
        </div>
        <div className='burger-menu'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
       </section>
      </Fragment>
  )
}

export default Sidebar