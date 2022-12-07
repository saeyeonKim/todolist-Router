import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./../App";
import Todo from "../components/todo/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
