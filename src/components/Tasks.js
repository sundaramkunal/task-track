import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggle,editTasksText }) => {
    const id = 1;

  
    return ( 
        <div style ={{width:'25%'}}> 
            
                {tasks.map((task) => (
                <Task key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    editTasksText={editTasksText}
                />
            ))}
            <p>you have {} 2 task left </p>
            <input type='submit' value='clear all'
                   className='btn ' />
        </div>
    )
}

export default Tasks

/*{console.logtasks.map((task)=>(
                id===task.id 
            ))} */
