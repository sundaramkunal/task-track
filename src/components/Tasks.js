import Task from './Task';
//import 'bootstrap/dist/css/bootstrap.min.css';
const Tasks = ({ tasks, onDelete, onToggle, editTasksText }) => {
    return (
        <div>

            {tasks.map((task) => (
                <Task key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    editTasksText={editTasksText}
                />
            ))}


        </div>
    )
}
export default Tasks






{/* <div >

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
</div> */}

{/* <div style={{float:'right'}}> */ }


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