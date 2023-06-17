import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{props.navy}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{props.home}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{props.feat}</a>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/About">About</NavLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={`form-check form-switch text-end text-${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>  
        <input className="form-check-input" type="checkbox" onClick= {props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Enable Dark mode</label>
      </div>
    </div>
  </nav>

  )
}
Navbar.defaultProps ={

    navy:'hi',

}