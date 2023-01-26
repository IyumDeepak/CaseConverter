import React,{useState} from 'react'


export default function Text(props) {
    const handleUpClick = ()=>{
    //console.log("UpperCase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick = ()=>{
        //console.log("LowerCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
     
        
        }
        //clear text
        const handleClearClick = ()=>{
          //console.log("clear text was clicked"+ text);
          let newText = '';
          setText(newText)
          props.showAlert("To all clear text!","success")
        
          }

          //its is uses for copy text
     const handleCopy=()=>{
       var text=document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copy to Clipboard!","success")
     }

          //to sumbit case
          const handleSubmitClick = ()=>{
           
            let newText = 'submitted';
            setText(newText)
            props.showAlert("It is submitted to all cases!","success")
            }

    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
        }
       

    const [text,setText] = useState('Enter text here');
   
  return (
    <>
    <h6 style={{color: props.mode==='dark'? 'white':'#042743'}}>Hello i am deepak from JharkhandLorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt neque ea magni iusto repudiandae corporis saepe quo, explicabo dolor tempore recusandae nulla possimus voluptatum necessitatibus maxime? Voluptates, deleniti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae distinctio odio nulla, quo laboriosam animi. Quas facilis ipsa assumenda rem recusandae neque nisi fuga, hic reiciendis eaque labore sequi adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo sit accusantium exercitationem quaerat voluptates libero quam sapiente voluptatibus? Impedit natus odit non sed molestias! Molestias inventore quidem officia reprehenderit.</h6>
    <hr />
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <h1 >{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.Example} </label>
  <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<a className="btn btn-primary btn-lg mx-2" onClick={handleUpClick}>Convert to UpperCase</a>
<a className="btn btn-primary btn-lg mx-2" onClick={handleLoClick}>Convert to LowerCase</a>
<a className="btn btn-primary btn-lg mx-2" onClick={handleClearClick}>Clear Text</a>
<a className="btn btn-primary btn-lg mx-2" onClick={handleCopy}>Copy Text</a>
<a className="btn btn-primary btn-lg mx-2" onClick={handleSubmitClick}>Submit</a>
      
</div>
    <div className="container my-3"style={{color: props.mode==='dark'? 'white':'#042743'}} >
        <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
    <hr />
    </div>
   
    </>
  )
}
