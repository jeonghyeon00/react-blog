/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import moment from "moment";
import "./App.css";

function App() {
  let [titleInput, setTitleInput] = useState("");
  let [contentInput, setContentInput] = useState("");
  let [title, setTitle] = useState([]);
  let [createdDate, setDate] = useState([]);
  let [content, setContent] = useState([]);
  let [like, setLike] = useState([]);

  let [modal, setModal] = useState(false);
  let [modalPost, setModalPost] = useState(0);
  const blogName = "정현 React 블로그";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogName}</h4>
      </div>
      {title.map((mapTitle, i) => {
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
                {mapTitle} &nbsp;
              </h4>
              <span
                onClick={() => {
                  let copyLike = [...like];
                  copyLike[i] = copyLike[i] + 1;
                  setLike(copyLike);
                }}
              >
                👍 {like[i]}
              </span>
              <p>{createdDate[i]}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let copyTitle = [...title];
                  copyTitle.splice(i, 1);
                  setTitle(copyTitle);
                  let copyDate = [...createdDate];
                  copyDate.splice(i, 1);
                  setDate(copyDate);
                  let copyContent = [...content];
                  copyContent.splice(i, 1);
                  setContent(copyContent);
                }}
              >
                ❌
              </button>
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
      <div>
        <p>
          제목 : &nbsp;
          <input
            onChange={(e) => {
              setTitleInput(e.target.value);
            }}
            style={{ width: "200px" }}
          />
        </p>
        <p>
          내용 : &nbsp;
          <input
            onChange={(e) => {
              setContentInput(e.target.value);
            }}
            style={{ width: "300px", height: "100px" }}
          />
        </p>

        <button
          onClick={() => {
            let titleCopy = [...title];
            titleCopy.unshift(titleInput);
            setTitle(titleCopy);
            let likeCopy = [...like];
            likeCopy.unshift(0);
            setLike(likeCopy);
            let dateCopy = [...createdDate];
            const nowTime = moment().format("YYYY-MM-DD");
            dateCopy.unshift(nowTime);
            setDate(dateCopy);
            let contentCopy = [...content];
            contentCopy.unshift(contentInput);
            setContent(contentCopy);
          }}
        >
          게시글 추가
        </button>
      </div>
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
