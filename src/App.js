import React, { Component } from 'react'
import BoilerPlate from './components/BoilerPlate'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoilerPlate />
        <Form />
      </div>
    );
  }
}

export default App;
