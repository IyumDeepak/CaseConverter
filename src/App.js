import { useState } from "react";
import Navbar from "./Component/Navbar";

//import Form from "./Component/Form";
import Alert from "./Component/Alert";
import Text from "./Component/Text";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

/* <Router>
   <Switch>
          <Route path="/about">
            <About />
          </Route>
        <Route path="/">
  
           </Route>
        </Switch>
   </Router> */
//import About from "./Component/About";

function App() {
  const [mode,setMode] = useState('light'); //wheather dark mode is enable or not
  //for using alert start code
  const [alert,setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const toggleMode =()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert("Dark mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been Enabled","success");
    }
  }
  return (
    <>
    <Navbar title="Textutils" aboutText="About Me" home="Home" Contact="Contact Me" hello="Hello World my pleasure" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <br />
    
    
  
  {/*<Form read="Read" learn="Learn More"/>*/}
   
    
  <div className="container my-2"> 
  <Text showAlert ={showAlert}Example="Enter the text to Analyze" heading="Full Explaination" mode={mode}/>
   </div>
 
   
    </>
  );
}
export default App;
