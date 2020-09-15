import React from 'react';

// WITH HTML TAG
function App() {
  // const greeting ="Hello, world!";
  // const dom = <h1 className="foo">{greeting}</h1>;
  const labelTag = <label htmlFor="bar">bar</label>
  const inputTag = <React.Fragment>{labelTag}<input type="text" onChange={ () => {console.log("I am Clicked!")}} /></React.Fragment>;
  

  return inputTag;
}

//WITH JSX
// function App() {
//   return React.createElement(
//     "h1",
//     null,
//     "Hello, world!",
//   );
// }

export default App;
