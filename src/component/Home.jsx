import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='Hero'>
      <div className="card bg-dark text-white  border-0">
        <img src="/assets/walpaper.jpg" className="card-img-top" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrival</h5>
            <p className="card-text lead fs-3">CHECK OUT ALL THE TRENDS</p>
            <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
          </div></div>

      </div>
    </div>
  )
}

export default Home;