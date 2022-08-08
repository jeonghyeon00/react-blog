/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  let [title, changeTitle] = useState([
    "서울 맛집",
    "남양주 맛집",
    "코틀린 스프링부트",
  ]);
  let [createdDate, changeDate] = useState([
    "2022-08-04",
    "2022-08-06",
    "2022-08-08",
  ]);
  let [content, changeContent] = useState([
    "잠실 맛집, 바이킹스워프",
    "약수촌, 광릉불고기",
    "Kotlin + Spring Boot + Jpa",
  ]);
  let [like, changeLike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [modalPost, setModalPost] = useState(0);
  const blogName = "정현 React 블로그";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogName}</h4>
      </div>
      {title.map((title, i) => {
        return (
          <div className="list" key={i}>
            <h4>
              <h4
                onClick={() => {
                  setModal(!modal);
                  console.log(modalPost);
                  setModalPost(i);
                  console.log(modalPost);
                }}
              >
                {title} &nbsp;
              </h4>
              <span
                onClick={() => {
                  let copyLike = [...like];
                  copyLike[i] = copyLike[i] + 1;
                  changeLike(copyLike);
                }}
              >
                👍 {like[i]}
              </span>
              <p>{createdDate[i]}</p>
            </h4>
          </div>
        );
      })}

      {modal == true ? (
        <Modal
          title={title}
          modalPost={modalPost}
          createdDate={createdDate}
          content={content}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>제목 : {props.title[props.modalPost]}</h4>
      <h4>작성 날짜 : {props.createdDate[props.modalPost]}</h4>
      <h4>상세 내용 : {props.content[props.modalPost]}</h4>
    </div>
  );
}

export default App;
