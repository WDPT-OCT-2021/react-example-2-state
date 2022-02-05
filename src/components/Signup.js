import React, { useState } from "react";

const Signup = () => {
  // [value, the function that changes the value]
  const [name, setName] = useState("");
  const [buttonCount, setButtonCount] = useState(0);
  const [start, setStart] = useState(false);

  return (
    <div>
      <h2>Sign up here with Hooks</h2>
      <label>Enter your name</label>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setStart(!start)}>Play</button>
      <br />
      {start ? (
        <>
          <button onClick={() => setButtonCount(buttonCount + 1)}>Add</button>
          <button onClick={() => setButtonCount(buttonCount - 1)}>
            Subtract
          </button>

          <h3>
            {name}'s current score is {buttonCount}
          </h3>
        </>
      ) : (
        <p>Please enter a name to play</p>
      )}
    </div>
  );
};

//Borderline obsolete method
// class Signup extends React.Component {
//   state = {
//     textInputValue: "",
//     password: '',
//     email: ''
//   };

//   handleChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       textInputValue: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Sign up here with the Class Component</h2>

//         <input
//           value={this.state.textInputValue}
//           onChange={this.handleChange}
//         ></input>
//         <input
//           value={this.state.password}
//           onChange={this.handleChange}
//         ></input>
//         <input
//           value={this.state.email}
//           onChange={this.handleChange}
//         ></input>
//       </div>
//     );
//   }
// }

export default Signup;
