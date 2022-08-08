import logo from "./logo.svg";
import "./App.css";

function App() {
  let blogName = "정현 블로그";
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <h4>{blogName}</h4>
    </div>
  );
}

export default App;
