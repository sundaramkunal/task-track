import React from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

//import { useState } from 'react';
import AddTasks from './components/AddTasks';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        text: 'Doctors apointment',
        day: 'feb 3',
        reminder: false,
      },
      {
        id: 2,
        text: 'Pay electricity bill',
        day: 'feb 4',
        reminder: false,
      },
      {
        id: 3,
        text: 'Go for a run',
        day: 'feb 5',
        reminder: false,
      },
      {
        id: 4,
        text: 'Code something ',
        day: 'feb 5',
        reminder: false,
      },

    ],

  }
  chengeShowAddTask = () => {
    const showAddTask = !this.state.showAddTask;
    this.setState({ showAddTask })
  }


  addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    const tasks = ([...this.state.tasks, newTask])
    console.log(tasks);
    this.setState({ tasks })
  }
  deleteTask = (id) => {
    console.log('delete called')
    console.log(id)
    this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) })
    // console.log(tasks)
    // this.setState({ tasks })
  }
  toggleReminder = (id) => {
    const tasks = this.state.tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task)
    this.setState({ tasks })
  }

  editText = (id, val) => {
    const newtasks = (this.state.tasks.map(
      (task) => task.id === id ? task.text = val : task.text))
    this.setState({ task: newtasks })

  }

  clearAll = () => {
    const tasks = this.state.myarray = [];
    this.setState({ tasks });
  }
  activeTask = () => {
    const val = this.state.tasks.filter(task => task.reminder === false)
    // console.log(val);
    return val.length
  }

  render() {
    return (
      <div className="container">

        <div style={{ paddingTop: '10px' }}><Header title={'Task Track'} /></div>
        <div className='form-control'>{<AddTasks onAdd={this.addTask} />}</div>
        <div>

          {this.state.tasks.length > 0 ? (
            <div><Tasks
              tasks={this.state.tasks}
              onDelete={this.deleteTask}
              onToggle={this.toggleReminder}
              editTasksText={this.editText}
            // clearAll={this.clearAll}

            />

              <div>
                <div>
                  <label className='label'>you have {this.activeTask()} task left </label>
                </div>
                <div>
                  <button
                    onClick={this.clearAll}
                    className='clearall'
                  >
                    ClearAll
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ color: 'red', margin: '10px' }}>No Tasks To Show</div>
          )}

        </div>


      </div>
    );
  }
}

export default App;






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



