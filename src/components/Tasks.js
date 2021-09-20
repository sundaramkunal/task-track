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
        </div>
    )
}

export default Tasks

/*{console.logtasks.map((task)=>(
                id===task.id 
            ))} */
