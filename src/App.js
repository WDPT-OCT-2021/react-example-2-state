import "./App.css";
import Signup from "./components/Signup";
import Game from "./components/Game";

function App() {
  let names = ["Ryan", "Carlos", "Wendy"];
  return (
    <div>
      {/* <Signup /> */}
      {names.map(function (singleName) {
        return (
          <div>
            <h4>Hi, my name is {singleName}</h4>
          </div>
        );
      })}

      {names.map(function (singleName) {
        return <Game name={singleName} />;
      })}
    </div>
  );
}

export default App;
