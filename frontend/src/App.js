import React, { useState } from 'react';
import axios from 'axios';


class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.reset();
  }

  reset(){
    this.state = {
      inputValue: 'Input text'
    };
  }

  render(props){
    var boy = 'input your text';
    return (
    <div>
    <input
      value={this.state.value}
      onChange={evt => this.updateInputValue(evt)}
      placeholder = "Input text for analysis"
      type="text"
      style={{
        borderRadius: '20px',
        borderBlockColor: 'blue',
        borderInlineColor: 'blue',
        height: '100px',
        width: '500px',
        padding: '10px',
        border: '1px,'
      }}
      {...props}
    />
    {this.state.inputValue}
    </div>)
  }

  updateInputValue(evt){
    const val = evt.target.value;
    this.setState({
      inputValue: val
    });
  }
}

function NewTest(props) {
  const [val, setVal] = useState('');
  const [para, setPara] = useState('');
  const click = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/process', {
        inputText: val,
      });
      setPara(response.data.outputText);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const change = (event) => {
    setVal(event.target.value);
  };
  return (
    <div>
      <textarea
        onChange={change}
        value={val}
        placeholder="Input text for analysis"
        style={{
          display: 'block',
          margin: '0 auto',
          borderRadius: '10px',
          borderBlockColor: 'blue',
          borderInlineColor: 'blue',
          height: '130px',
          width: '500px',
          padding: '10px',
          border: '1px ',
          position: 'relative',
          top: '-20px',
        }}
      />
      <button
        style={{ position: 'relative', top: '10px' }}
        className="button"
        onClick={click}
      >
        ANALYZE
      </button>
      <hr style={{ position: 'relative', top: '40px', backgroundColor:'white'}}></hr>
      <p
        style={{
          backgroundColor: '#d4e5ef',
          position: 'relative',
          top: '35px',
          textAlign: 'center',
          margin: '0 auto',
          padding: '30px',
        }}
      >
        {para}
      </p>
    </div>
  );
}

function Header({args}){
  const mystyle = {
    color: args.color,
    textAlign: "center",
    alignItems: 'center', 
    height: '10vh',
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
    <div style={{ backgroundColor: '#d4e5ef' }}>
      <Header args={{text: "AuthenText",
                     color: "#146192",
                     size: "50px"}}/>
      <Header args={{text: "AI Language Detector",
                     color: "black",
                     size: "20px"}}/>            
      <NewTest/>
    </div>
  );
}



export default App;
