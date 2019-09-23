import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "Hi!"
    const dom = <h1>{greeting}</h1>
    return (
      <React.Fragment>
        <h1>Hi</h1>
        <label htmlFor="aa">this is label</label>
        <input type="text" className="aaa" onClick={() => {console.log("I am clicked")}} />
      </React.Fragment>
    )
  }
}

export default App;
