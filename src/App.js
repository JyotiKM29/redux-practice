import Counter from "./Counter";
import { useDispatch } from "react-redux";
import Acom from "./Hoc/Acom";
import Bcm from "./Hoc/Bcm";


function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "Inc" })}>+</button>
      <Counter />
      <button onClick={(e) => dispatch({ type: "Des" })}>-</button>

      <hr />
      <Acom name="Jyoti"/>
      <Bcm name="Ujala"/>
    </div>
  );
}

export default App;
