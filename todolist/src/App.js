import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    // this.takeInput = this.takeInput.bind(this);
    this.sendInput = this.sendInput.bind(this);
  }

  takeInput(value) {
    this.setState({
      text: value
    });
  }

  sendInput(){
    this.props.takeContext(this.state.text);
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div className="main-input">
        <div className="inputHolder">
          <textarea
            type="text"
            onChange={event => this.takeInput(event.target.value)}
            className="box"
            placeholder="Enter your Note"
            maxLength={240}
            value={this.state.text}
          />
          <button
            type="submit"
            onClick={this.sendInput}
            className="button"
          >
            Add
          </button>
        </div>
        <div className="character">
          Total characters: {240-((this.state.text).length)}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      items:[]
    };
    this.displayText = this.displayText.bind(this);
  }

  displayText(text) { 
    this.setState({
      note: text,
      items: [...this.state.items, text]
    }, function() {
      console.log(this.state.items);
    });
  }

 
 
  render() {
    return (
      <div className="App">
        <InputBox takeContext={this.displayText} />
        <button style={{marginTop:"10px", color:"blue"}} onClick={() => this.setState({items: []})}>Clear</button>
        <div className="todolist">
            {this.state.items.map((item, index) => (
              <div key ={index} >
                <input type="checkbox" className="strikebox" />
                <span  style={{ color: "white" }}>{item}</span>
              </div>
            ))}  
        </div>
      </div>
    );
  }
}

export default App;
