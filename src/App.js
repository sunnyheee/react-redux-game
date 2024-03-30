import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./components/Box";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "sunny", password: "123" } });
  };

  return (
    <div>
      <p>
        {id},{password}
      </p>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
