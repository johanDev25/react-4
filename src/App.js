import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
          repeat: ""
		}
	}
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.repeater.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.repeat}</p>
      </div>
    );
  }
  
  repeater(event){
    this.setState({
			repeat: event.target.value
	  });
  }
}

export default App;
