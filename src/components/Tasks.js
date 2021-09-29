import Task from "./Task";
import { connect } from "react-redux";
// import { toggleCompleted, clearTask } from "./redux/actions/action";

//import 'bootstrap/dist/css/bootstrap.min.css';
const Tasks = (props) => {
  return (
    <div>
      {console.log(props.tasks)}
      {props.tasks.map((task, id) => (
        <Task
          key={id}
          task={task}
          onDelete={props.deleteTask}
          onToggle={props.toggleCompleted}
          editTasksText={props.editText}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  tasks: state,
});
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch({ type: "DELETE_TODO", payload: id }),
    toggleCompleted: (id) => dispatch({ type: "ON_TOGGLE", payload: id }),
    editText: (id, text) =>
      dispatch({ type: "EDIT_TEXT", payload: { id, text } }) /* */,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

{
  /* <div >

{/* <div>
    <label className='label'>you have {value} task left </label>
</div>
<div>
    <button
        onClick={clearAll}
        className='clearall'
    >
        ClearAll
    </button>
</div> */
}

{
  /* <div style={{float:'right'}}> */
}

//</div> */}
// <input type='submit' value='clear all'
// className='clearall'
// onClick={clearAll} />
//{float:'right',width:'10%'}
//{float:'left', width:'50%',textAlign:'right',paddingTop:'10px'}
/*{console.logtasks.map((task)=>(
                id===task.id
            ))} */

// <input type='submit' value='clear all'
//        className='btn ' />
// </div>
// const val = tasks.filter(task => task.reminder === false)
// // console.log(val);
// const value = val.length
//{ tasks, onDelete, onToggle, editTasksText
