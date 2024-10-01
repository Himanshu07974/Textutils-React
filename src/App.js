import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  // const [state,setState] = useState(initialState)
  const [mode,setMode] = useState('light');
  // const [state,setState] = useState(initialState)
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  
  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ="#6c757d"
      showAlert("Dark Mode has been enabled", "sucess ");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white"
      showAlert("Light Mode has been enabled", "sucess ");


    }
  }

  return (
    <>
    
    {/* <Navbar title = "TextUtils2" aboutText="About us"/> */}
    <Router>
    <Navbar title = "TextUtils" aboutText="About" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/"element={<TextForm  showAlert={showAlert}heading = "Enter The Text Here" mode={mode}/>}></Route>
        </Routes>
          {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
