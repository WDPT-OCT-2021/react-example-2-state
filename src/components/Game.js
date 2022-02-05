import React from "react";

const Game = (props) => {
  const [buttonCount, setButtonCount] = React.useState(0);

  return (
    <div style={{ borderWidth: 1, borderColor: "black", border: 1 }}>
      <h3>
        {props.name}'s current score is {buttonCount}
      </h3>
      <button onClick={() => setButtonCount(buttonCount + 1)}>Add</button>
      <button onClick={() => setButtonCount(buttonCount - 1)}>Subtract</button>
    </div>
  );
};

export default Game;
