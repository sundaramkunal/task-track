import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
const Task = ({ task, onToggle, editTasksText, onDelete }) => {
  const [editable, setEditable] = useState(false);
  const [val, setValue] = useState(task.text);
  //const random= {task.id,...val}

  const handleChange = (e) => {
    //set( e.target.value)

    setValue(e.target.value);
  };

  const handleClick = () => {
    setEditable(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 13 || e.key === "Enter") {
      setEditable(false);
      //   console.log(task.id, val);
      editTasksText(task.id, val);
    }
  };

  return (
    <div>
      <div
        className={`task 
                ${task.completed ? "completed" : ""}`}
        onDoubleClick={() => onToggle(task.id)}
      >
        <h3>
          <div>
            {editable ? (
              <div className="inputwidth">
                <input
                  value={val}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
              </div>
            ) : (
              <div onClick={handleClick}>{task.text}</div>
            )}
          </div>
          <div>
            <button class="delete">
              <IoMdTrash onClick={() => onDelete(task.id)} />
            </button>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Task;

//<h3> Lets go for a <FaBeer />? </h3>

// Iomdtrash style={{ color: 'red', cursor: 'pointer', fontSize: '40px' }}
//<p>{task.day}</p>
//import { FaTimes } from 'react-icons/fa'
//<h3> Lets go for a < BsFillPlusCircleFill/>? </h3>
{
  /* <FaTimes
style={{ color: 'red', cursor: 'pointer' }}
onClick={() => onDelete(task.id)}
/> */
}
{
  /* <div>
                        <button className="destroy" onClick={() => onDelete(task.id)} />
                    </div> */
}
