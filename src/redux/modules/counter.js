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
export const isDoneContent = (payload) => {
  return { type: ISDONE_CONTENT, payload: payload };
};
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
        todos: [...state.todos],
      };
    }
    default:
      return state;
  }
};
// export/default/counter
export default todos;
