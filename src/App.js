import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

class App extends React.Component {
  // count = this.props.activeTask;
  //

  // simpleAction = (event) => {
  //   this.props.simpleAction();
  //  }

  // chengeShowAddTask = () => {
  //   const showAddTask = !this.state.showAddTask;
  //   this.setState({ showAddTask })
  // }
  // addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = { id, ...task }
  //   const tasks = ([...this.state.tasks, newTask])
  //   console.log(tasks);
  //   this.setState({ tasks })
  // }
  // deleteTask = (id) => {
  //   console.log('delete called')
  //   console.log(id)
  //   this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) })
  //   // console.log(tasks)
  //   // this.setState({ tasks })
  // }
  // toggleReminder = (id) => {
  //   const tasks = this.state.tasks.map((task) =>
  //     task.id === id ? {
  //       ...task, reminder:
  //         !task.reminder
  //     } : task)
  //   this.setState({ tasks })
  // }
  // clearAll = () => {
  //   const tasks = this.state.myarray = [];
  //   this.setState({ tasks });
  // }

  // editText = (id, val) => {
  //   const newtasks = this.state.tasks.map((task) =>
  //     task.id === id ? (task.text = val) : task.text
  //   );
  //   this.setState({ task: newtasks });
  // };

  activeTask = () => {
    const val = this.props.tasks.filter((task) => task.completed === false);
    // console.log(val);
    return val.length;
  };

  render() {
    // const count = this.props.activeTask;
    return (
      <div className="container">
        <div style={{ paddingTop: "10px" }}>
          <Header title={"Task Track"} />
        </div>
        <div className="form-control">{<AddTasks />}</div>
        <div>
          {this.props.tasks.length > 0 ? (
            <div>
              <Tasks />
              {console.log(this.props.tasks)}
              <div>
                <div>
                  <label className="label">
                    you have {this.activeTask()} task left
                  </label>
                </div>
                <div>
                  <button onClick={this.props.clearAll} className="clearall">
                    ClearAll
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ color: "red", margin: "10px" }}>No Tasks To Show</div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  tasks: state,
});
const mapDispatchToProps = (dispatch) => {
  return {
    clearAll: () => dispatch({ type: "CLEAR_TASK" }),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;

//onAdd={(data)=> this.props.addTask(data)}
//width:'30%',margin:'auto',height:'70%'

//const updatedTasks=(this.state.tasks.map((task)=>task.id===id?task.text=val:task.text))

// const App = () => {
//   const [tasks, setTasks] = useState()

// const editTask=() =>{console.log(tasks.text) }
//add task
// const addTask=(task) =>{
//   const id = Math.floor(Math.random()* 10000) + 1
//   const newTask = {id, ...task}
//   setTasks([...tasks,newTask])
// }

// delete a task
// const deleteTask = (id) => {
//   setTasks(tasks.filter((task) => task.id !== id))
// }
//toggle reminder
// const toggleReminder = (id) => {
//   setTasks(
//     tasks.map((task) =>
//       task.id ===id ? {
//         ...task, reminder:
//           !task.reminder
//       } : task)
//   )
// }
// const editText=(id,val)=>{
//   tasks.map((task)=>task.id===id?task.text=val:task.text)
//   console.log(id,val);
//   console.log(tasks);

//   }

// }

//export default App;
//const tasks=[
//    {
//     id:1,
//     text:'run',
//     day:'feb 6',
//     isCompleted:'false'
//   },
//   {

// }]
// const mapDispatchToProps = dispatch => {
//   return {
//       handleAdddTodo: (data) => dispatch({ type: 'ADD_TODO', payload: data })

//   }
// };
// tasks={this.props.tasks}
// onDelete={this.props.deleteTask}
// onToggle={this.props.toggleCompleted}
// editTasksText={this.props.editText}
// onAdd={this.props.addTask}
