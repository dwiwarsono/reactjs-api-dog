import React, { Component } from 'react';
import logo from './logo.svg';
import DogList from './DogList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    }
  }


// REQUEST KE API
  componentDidMount() {
    fetch("https://dog.ceo/api/breed/boxer/images")
    .then((res) => res.json())
    .then((data) => {
     this.setState({dogs: data.message})
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Dog World</h1>
        {/* </header> */}
        {/* <p className="App-intro"> 
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <DogList dogs={this.state.dogs} /> // INI MEMANGGIL COMPONENT dari DogList.js
      </div>
    );
  }
}

export default App;
// 
