import { useState } from "react";
import "./App.css";

function App() {
  let [title, changeTitle] = useState([
    "서울 맛집",
    "남양주 맛집",
    "코틀린 스프링부트",
  ]);
  let [like, changeLike] = useState(0);
  const blogName = "정현 블로그";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogName}</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              changeLike(like + 1);
            }}
          >
            👍 {like}
          </span>
          <button
            onClick={() => {
              let copy = [...title];
              copy[0] = "글 제목 변경";
              changeTitle(copy);
            }}
          >
            글 제목 변경
          </button>
        </h4>
        <p>8월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>8월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>8월 8일 발행</p>
      </div>
    </div>
  );
}

export default App;
