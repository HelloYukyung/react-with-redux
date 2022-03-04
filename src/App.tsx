import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
}

export default App;
