import React from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

//import { useState } from 'react';
import AddTasks from './components/AddTasks';

class App extends React.Component {
  state={
    tasks:[
      {
        id: 1,
        text: 'task 1',
        day: 'feb 3',
        reminder: true,
      },
      {
        id: 2,
        text: 'task 2',
        day: 'feb 4',
        reminder: true,
      },
      {
        id: 3,
        text: 'task 3',
        day: 'feb 5',
        reminder: true,
      },
    ],
    showAddTask:false

  }
  chengeShowAddTask= ()=> {
    const showAddTask=!this.state.showAddTask;
    this.setState({showAddTask})
  }
  
  
  addTask=(task) =>{
    const id = Math.floor(Math.random()* 10000) + 1
    const newTask = {id,...task}
    const tasks=([...this.state.tasks,newTask])
    console.log(tasks);
    this.setState({tasks})
  }
  deleteTask = (id) => {
    this.setState(this.state.tasks.filter((task) => task.id !== id))
  }
  toggleReminder = (id) => {
    // console.log(id+'clicked')
    const tasks=this.state.tasks.map((task) =>
    task.id ===id ? {
      ...task, reminder:
        !task.reminder
    } : task)
    this.setState({tasks})
  }
  editText=(id,val)=>{
    
    const newtasks=(this.state.tasks.map((task)=>task.id===id?task.text=val:task.text))
  
    this.setState({task:newtasks})
    
  }

  render() { 
    return (
      <div className="App" style={{marginLeft:'50px'}}>
        
        <Header title={'Task Track'}onAdd={this.chengeShowAddTask}/>
         {this.state.showAddTask && <AddTasks onAdd ={this.addTask} />}
        {this.state.tasks.length > 0 ? (
          <Tasks
            tasks={this.state.tasks}
            onDelete={this.deleteTask}
            onToggle={this.toggleReminder}
            editTasksText={this.editText}
            />
        ) : (
          'No Tasks To Show'
        )} 
        {this.state.tasks.map((item)=>
        <div>{item.text}</div>)}
      </div>
    );
  }
}
 
export default App ;




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



