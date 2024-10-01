// import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("UpperCase Was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert has been Uppercase","sucess");
             
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert has been Lowercase","sucess");


        
    }
    const handleClClick =()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear the text","sucess ");


        
    }
    const handleUnClick =()=>{
        if (history.length > 0) {
            const previousText = history[history.length - 1];
            setText(previousText);
            setHistory(history.slice(0, -1)); // Remove the last entry from history
            props.showAlert("Undo","sucess ");


          }
        
    }
    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
        setHistory([...history, text]);

    }
    const [text, setText] = useState('');
    const [history, setHistory] = useState([]);

    //  text = "it is Wrong"; //Wrong way to Change the state 
        // setText("Text Here");
    
  return (
<>    
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleOnChange} rows="8"></textarea>
    <button className="btn btn-warning my-3" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-warning my-3 mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
    <button className="btn btn-warning my-3 mx-1" onClick={handleClClick}>Clear</button>
    <button className="btn btn-warning my-3 mx-1" onClick={handleUnClick}>Undo</button>
    </div>
</div>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>word {text.split(" ").length} and Character {text.length}</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
