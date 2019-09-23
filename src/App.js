//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

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
  const profiles = [
    {name: "jun", age: 41},
    {name: "daichi", age: 7},
    {name: "noritomo", age: 15}
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age}/>
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
