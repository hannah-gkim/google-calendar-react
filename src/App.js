import { getMonth } from "./util";
import "./App.css";

function App() {
  console.log(getMonth()[0][1]["$y"]); //2021
  /*
  getMonth() => (5)[arr(7), arr(7), arr(7), arr(7), arr(7)]
  each arr has 7 days[{..}*7]
  each {} => {$D:1, $M:11, $y:2021...}
  */
  return <div className="App">hello</div>;
}

export default App;
