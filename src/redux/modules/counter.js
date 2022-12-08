// src/modules/counter.js

// Action/value
const ADD_CONTENT = "ADD_CONTENT";
const DELETE_CONTENT = "DELETE_CONTENT";
const ISDONE_CONTENT = "ISDONE_CONTENT";
// Action/Creator
export const addContent = (payload) => {
  return {
    type: ADD_CONTENT,
    payload: payload, // 줄여서 payload로만 작성 가능
  };
};
export const deleteContent = (payload) => {
  return {
    type: DELETE_CONTENT,
    payload: payload,
  };
};
export const isDoneContent = (id) => {
  console.log("payload", id);
  return { type: ISDONE_CONTENT, id: id };
};
// (id)는 isDonContent에 받아온 값을 payload에 지정해서 보내준다?

// Initial/State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 공부하기",
      todo: "리액트 기초를 공부해",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트 공바하기",
      todo: "리액트 기초를 공바해",
      isDone: true,
    },
    {
      id: 3,
      title: "리액트 공비하기",
      todo: "리액트 기초를 공비해",
      isDone: false,
    },
    {
      id: 4,
      title: "리액트 공보하기",
      todo: "리액트 기초를 공보해",
      isDone: false,
    },
  ],
};
// Reducer
const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CONTENT: {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    case DELETE_CONTENT: {
      return {
        todos: state.todos.filter((content) => content.id !== action.payload),
      };
    }
    case ISDONE_CONTENT: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ), // action.id는 payload??????(id와 payload 이름은 의미 없고 같은 )
      };
    }
    default:
      return state;
  }
};
// export/default/counter
export default todos;
