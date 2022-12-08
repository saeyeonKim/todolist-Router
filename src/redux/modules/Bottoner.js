import { styled } from "styled-components";

const Bottoner = (props) => {
  return (
    <AddButton>
      <button
        onClick={() => {
          props.onClickDeleteUserHandler(props.content.id);
        }} // 화살표함수를 써야 클릭했을 때만 실행된다.
      >
        삭제하기
      </button>
    </AddButton>
  );
};

const AddButton = styled.div`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 140px;
  color: white;
  background-color: teal;
`;
