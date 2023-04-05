import React, { useState } from 'react';

function NewTest(props){
  const [val, setVal] = useState("")
  const [para, setPara] = useState("")
  const click = () => {
    setPara(val);
  }
  const change = event => {
    setVal(event.target.value)
  }
  return (
    <div>
      <textarea onChange={change} value={val} placeholder="Input text for analysis"
      style={{
        display: 'block',
        margin: '0 auto',
        borderRadius: '10px',
        borderBlockColor: 'blue',
        borderInlineColor: 'blue',
        height: '100px',
        width: '500px',
        padding: '10px',
        border: '1px solid gray'
      }}/>
      <button style={{position: 'relative', top: '10px'}} className='button' onClick={click}>ANALYZE</button>
      <hr style={{position: 'relative', top: '10px'}}></hr>
      <p style={{position: 'relative',
                top: '10px',
                textAlign: 'center',
                margin: '0 auto'}}>{para}</p>
    </div>
  )
}

function Header({args}){
  const mystyle = {
    color: args.color,
    textAlign: "center",
    fontSize: args.size
  };
  return(
    <div>
      <h1 style={mystyle}>{args.text}</h1>
    </div>
  );
}

function App(){
  return (
    <div>
      <Header args={{text: "AI Detector",
                     color: "green",
                     size: "50px"}}/>
      <Header args={{text: "IE3 Team ?",
                     color: "black",
                     size: "20px"}}/>            
      <NewTest/>
    </div>
  );
}



export default App;
