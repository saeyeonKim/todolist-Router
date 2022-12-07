import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContent } from "./../../redux/modules/counter";
import { useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const contents = useSelector((state) => state.todos.todos);
  const onClickAddUserHandler = () => {
    dispatch(
      addContent({
        id: contents.length + 1, //contents의 길이에 +1씩 해서 카드가 하나씩 늘어나게 함.
        title: title,
        todo: todo,
        isDone: true,
      })
    );
  };

  return (
    <AddBox>
      <div>
        <label>제목</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>내용</label>
        <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      </div>
      <button onClick={onClickAddUserHandler}>추가하기</button>
    </AddBox>
  );
};
const AddBox = styled.div`
  background-color: rgb(238, 238, 238);
  border-radius: 12px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
  width: 1200px;
`;

export default Form;
