import React from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
 
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <a className="navbar-brand" href="/">{props.title}</a>
  <buthrefn className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
    <span className="navbar-hrefggler-icon"></span>
  </buthrefn>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auhref">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.home} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
    <a className="nav-link" href="/about">{props.aboutText}</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/">{props.Contact}</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
     
      <buthrefn className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</buthrefn>
      &nbsp;&nbsp;
  </form>
 </div>
  <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>

</nav>

  )
}

// Navbar.prohreftype = {
//     title:prohreftype.string,
//     aboutText:prohreftype.string

// }

// Navbar.defaultprops={
//     title:'set this is'

// }
