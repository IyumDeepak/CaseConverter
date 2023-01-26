import React from 'react'

export default function Form(props) {
  return (
    <>
   <div className="container my-3">
    <div className="jumbotron">
    <h1 className="display-4">Hello World! I' M DEEPAK</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4"/>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur! Laboriosam excepturi neque dolor fugiat, nihil porro fuga modi totam eveniet assumenda laudantium. Eveniet sed fugit porro odit assumenda nobis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur distinctio officia voluptatem animi reprehenderit aliquam, quod corporis expedita eaque fugit laborum iure error possimus amet beatae repellendus earum culpa veniam dolorum perspiciatis libero?</p>
    <a className="btn btn-primary btn-lg" href="/" role="button">{props.read}</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a className="btn btn-primary btn-lg" href="/" role="button"float="right">{props.learn}</a>
    
  </div>
  </div>


  </>
  )
}
