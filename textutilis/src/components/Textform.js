import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("") 
const Clicked=()=>{
    let newText=text.toUpperCase();
    setText(newText)
}
const Licked=()=>{
  let newText=text.toLowerCase();
  setText(newText)
}
const Cleared=()=>{
  let newText='';
  setText(newText)
}
const Changed=(event)=>{
    setText(event.target.value)
}
  return (
<> 
  <div className={`text-${props.mode} bg-${props.color}`}>
  <div className={`container my-2 text-${props.mode}`} >
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">{props.enter}</label>
    <textarea class="form-control" value={text} onChange={Changed}  id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick ={Clicked} >CONVERT</button>
  <button className="btn btn-primary mx-2" onClick ={Licked}> LOWERCASE</button>
  <button className="btn btn-primary mx-2" onClick ={Cleared}> CLEAR</button>
  </div>
  <div className={`container my-2  text-${props.mode}`}>
    <h1>tell the details</h1>
    <p>{text.split(" ").length}words and {text.length}characters </p>
    <p>{0.008 * text.split(" ").length}minutes read</p>
    <h2>Preview</h2>
  </div>
  </div>
 </>
  )
}
