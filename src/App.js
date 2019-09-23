import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const greeting = "Hi!"
//     const dom = <h1>{greeting}</h1>
//     return (
//       <React.Fragment>
//         <h1>Hi</h1>
//         <label htmlFor="aa">this is label</label>
//         <input type="text" className="aaa" onClick={() => {console.log("I am clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>meow</div>
}

export default App;
