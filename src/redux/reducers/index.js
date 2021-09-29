const intialState = [
  {
    id: 1,
    text: "Doctor's Apointment",
    day: "feb 3",
    completed: false,
  },
  {
    id: 2,
    text: "Pay energy bill",
    day: "feb 4",
    completed: false,
  },
  {
    id: 3,
    text: "Go for a run",
    day: "feb 5",
    completed: false,
  },
  {
    id: 4,
    text: "Code something ",
    day: "feb 5",
    completed: false,
  },
];

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO": {
      console.log(state, action.payload);
      const arr = state.filter((item) => item.id !== action.payload);
      return arr;
    }
    case "ON_TOGGLE": {
      // console.log(state, action.payload);
      const tasks = state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );
      // console.log(tasks);
      return tasks;
    }
    case "EDIT_TEXT": {
      console.log(action.payload);
      const tasks = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      console.log(tasks);
      return tasks;
    }

    case "CLEAR_TASK": {
      const task = [];
      return task;
    }

    default:
      return state;
  }
};
export default reducer;
