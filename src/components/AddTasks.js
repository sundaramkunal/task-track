import { useState } from "react";
import { connect } from "react-redux";
import { BsPlusSquareFill } from "react-icons/bs";

const AddTasks = (props) => {
  const [text, setText] = useState("");
  const [completed, setcompleted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    props.addTask(text, completed);

    setText("");
    setcompleted(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Add your new todo "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="addTodo" type="submit">
          {" "}
          <BsPlusSquareFill />
        </button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  tasks: state,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text, completed) =>
      dispatch({ type: "ADD_TODO", payload: { text, completed } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTasks);
