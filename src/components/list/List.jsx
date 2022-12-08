import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const List = (props) => {
  const navigation = useNavigate();
  return (
    <CardBox>
      <p onClick={() => navigation(`/${props.content.id}`)}>상세보기</p>
      <p>{props.content.title}</p>
      <p>{props.content.todo}</p>
      <button
        onClick={() => {
          props.onClickDeleteUserHandler(props.content.id);
        }} // 화살표함수를 써야 클릭했을 때만 실행된다.
      >
        삭제하기
      </button>
      <button
        onClick={() => {
          console.log("id", props.content.id);
          props.isDoneHandler(props.content.id);
        }}
      >
        {props.content.isDone ? "완료" : "취소"}
      </button>
    </CardBox>
  );
};

const CardBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;
export default List;
