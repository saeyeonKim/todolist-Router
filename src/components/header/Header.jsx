import styled from "styled-components";

const Header = () => {
  return (
    <TitleBox>
      <span>My Todo List</span>
      <span>React</span>
    </TitleBox>
  );
};
const TitleBox = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  padding: 0px 20px;
  margin-bottom: 24px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
