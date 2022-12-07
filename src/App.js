import "./App.css";
//import styled from "styled-components";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import { useSelector, useDispatch } from "react-redux";
import List from "./components/list/List";
import { deleteContent, isDoneContent } from "./redux/modules/counter";

function App() {
  const contents = useSelector((state) => state.todos.todos);
  console.log(contents);

  const dispatch = useDispatch();
  //const newContentList = todos.filter((content) => content.id !== todos.id);
  const onClickDeleteUserHandler = (id) => {
    dispatch(deleteContent(id));
  };
  const isDoneHandler = (id) => {
    dispatch(isDoneContent(id));
  };
  // const onChangeHandler = (id) => {
  //   const copy = [...contents];
  //   setContents(copy);

  return (
    <div className="App">
      <Header />
      <div>
        <Form />
      </div>
      <div>
        <h2>Working..🔥</h2>

        {contents.map((content) =>
          content.isDone === true ? (
            <List
              onClickDeleteUserHandler={onClickDeleteUserHandler}
              content={content}
              key={content.id}
              isDoneHandler={isDoneHandler}
            ></List>
          ) : null
        )}

        <h2>done..!🎉</h2>
        {contents.map((content) =>
          content.isDone === false ? (
            <List
              onClickDeleteUserHandler={onClickDeleteUserHandler}
              content={content}
              key={content.id}
              isDoneHandler={isDoneHandler}
            ></List>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
