import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react-lite";

function App(props) {
  const renderApp = (store) => {
    console.log(store.count);
    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Value: {store.count}</p>
        <button type="button" onClick={() => store.increment()}>
          Increment
        </button>
        <button type="button" onClick={() => store.decrement()}>
          Decrement
        </button>
      </div>
    );
  };

  return renderApp(props.store);
}

export default observer(App);
