import React from 'react';
import PropTypes from 'prop-types';

// WITH HTML TAG
// function App() {
//   // const greeting ="Hello, world!";
//   // const dom = <h1 className="foo">{greeting}</h1>;
//   const labelTag = <label htmlFor="bar">bar</label>
//   const inputTag = <React.Fragment>{labelTag}<input type="text" onChange={ () => {console.log("I am Clicked!")}} /></React.Fragment>;
  

//   return inputTag;
// }

//WITH JSX
// function App() {
//   return React.createElement(
//     "h1",
//     null,
//     "Hello, world!",
//   );
// }

const App = () => {
  const profiles = [
      { name: "Taro", age:10 },
      { name: "Hanako", age:7 },
      { name: "Dareka" }
    
  ];
  return (
    <div>
      {
        profiles.map( (profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        } )
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old. </div>
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

export default App;
