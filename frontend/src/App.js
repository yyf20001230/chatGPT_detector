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
        borderRadius: '10px',
        borderBlockColor: 'blue',
        borderInlineColor: 'blue',
        height: '100px',
        width: '500px',
        padding: '10px',
        border: '1px solid gray'
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


function RoundedTextBox(props) {
  return (
    <div style={{ overflowWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <input
        type="text"
        style={{
          borderRadius: '10px',
          borderBlockColor: 'blue',
          borderInlineColor: 'blue',
          height: '100px',
          width: '500px',
          padding: '10px',
          border: '1px solid gray',
        }}
        {...props}
      /> */}

      <MyComponent/>
    </div>
  );
}

function Test(props){
  return (
    <form action='/action_page.php'>
      <textarea id="inputbox" rows='4' cols='50'>Input text here!</textarea>
      <input type="submit" value="Submit"></input>

    </form>
  )
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
          height: '100px',
          width: '500px',
          padding: '10px',
          border: '1px solid gray',
        }}
      />
      <button
        style={{ position: 'relative', top: '10px' }}
        className="button"
        onClick={click}
      >
        ANALYZE
      </button>
      <hr style={{ position: 'relative', top: '10px' }}></hr>
      <p
        style={{
          position: 'relative',
          top: '10px',
          textAlign: 'center',
          margin: '0 auto',
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
    fontSize: args.size
  };
  return(
    <div>
      <h1 style={mystyle}>{args.text}</h1>
    </div>
  );
}

function HoverButton(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyle = {
    backgroundColor: hovered ? props.hoverColor : props.color,
    color: props.textColor,
    border: 'none',
    padding: '11px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const divstyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

  return (
    <div style={divstyle}>
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </button>
    </div>
  );
}

function App(){
  return (
    <div>
      <Header args={{text: "AI Text Detector",
                     color: "green",
                     size: "50px"}}/>
      <Header args={{text: "AuthenText",
                     color: "black",
                     size: "20px"}}/>            
      <NewTest/>
    </div>
  );
}



export default App;
