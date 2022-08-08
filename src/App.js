import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, b] = useState(["서울 맛집", "남양주 맛집", "코틀린 스프링부트"]);
  const blogName = "정현 블로그";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogName}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>8월 8일 발행</p>
      </div>
    </div>
  );
}

export default App;
