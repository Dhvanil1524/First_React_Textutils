import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase Clicked: " + text)
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowClick=()=>{
    console.log("Lowercase Clicked: " +text)
    let newText1=text.toLowerCase();
    setText(newText1);
  }
  const handleOnChange=(event)=>{
    console.log("On change")
    setText(event.target.value)
  }
  const[text,setText]=useState("");
  return (
    <>
<div className="container">
<h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="8"></textarea>
  </div>
  <button className="btn-btn-primary my-3 mx-2" onClick={handleUpClick} >Uppecase</button>
  <button className="btn-btn-primary mx-2" onClick={handleLowClick} >Lowercase</button>
</div>
<div className="container">
  <h2>Your Text Summary :-</h2>
  <p>{text.split(" ").length} words and {text.length} characters in your textarea</p>
</div>
</>
  )
}
