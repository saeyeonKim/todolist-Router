import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TodoDetail = () => {
  const navigation = useNavigate();
  const params = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const todo = todos.filter((todo) => {
    return todo.id === +params.id;
  });
  return (
    <>
      <div>{todo[0]?.id}</div>
      <span>{todo[0]?.title}</span>
      <span>{todo[0]?.todo}</span>
      <div onClick={() => navigation(-1)}>이전버튼</div>
    </>
  );
};

export default TodoDetail;
