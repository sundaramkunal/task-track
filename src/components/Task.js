import { useState } from 'react'


const Task = ({ task, onToggle,editTasksText,onDelete }) => {
    const [editable,setEditable]=useState(false)
    const [val,setValue]=useState(task.text)
    //const random= {task.id,...val}

    const handleChange=(e)=>{
       //set( e.target.value)
       setValue(e.target.value)
    }

    const handleClick=()=>{
        setEditable(true)
    }

    const handleKeyPress=(e)=>{
        if (e.key === 13 || e.key === "Enter") {
            setEditable(false)
        editTasksText(task.id,val)
        //console.log(val);

        // valChange({})
        }
    }
      
    return (
        <div 
            className={`task 
            ${task.reminder ? 'reminder' : ''}`}
            onClick={() =>onToggle(task.id)}
        > 

           {editable? (
              <input 
                value={val} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress}
              />)
                :
                (<div onDoubleClick={handleClick}>{task.text}</div>)}
                
            
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task




//import { FaTimes } from 'react-icons/fa'
{/* <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                /> */}

