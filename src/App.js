import "./App.css";
import styled from "styled-components";
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
    console.log(id, "id");
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
        <Wrap>
          {contents?.map((content) =>
            content.isDone === true ? (
              <List
                onClickDeleteUserHandler={onClickDeleteUserHandler}
                content={content}
                key={content.id}
                isDoneHandler={isDoneHandler}
              ></List>
            ) : null
          )}
        </Wrap>

        <h2>done..!🎉</h2>
        <Wrap>
          {contents?.map((content) =>
            content.isDone === false ? (
              <List
                onClickDeleteUserHandler={onClickDeleteUserHandler}
                content={content}
                key={content.id}
                isDoneHandler={isDoneHandler}
              ></List>
            ) : null
          )}
        </Wrap>
      </div>
    </div>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-left: 320px;
  margin-right: 350px;
`;

export default App;
