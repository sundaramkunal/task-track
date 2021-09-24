import { useState } from 'react';
//import { AiOutlinePlus } from 'react-icons/ai';
import { BsPlusSquareFill } from 'react-icons/bs';


const AddTasks = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }
        onAdd({
            text,
            day,
            reminder
        })


        setText('')
        setDay('')
        setReminder(false)

    }


    return (

        <form onSubmit={onSubmit}>

            <div style={{ display: 'flex' }}>
                <input
                    type='text'
                    placeholder='Add your new todo '
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />


                <button className='addTodo'
                    type='submit'
                > <BsPlusSquareFill
                    />
                </button>
            </div>
        </form >
    )
}

export default AddTasks

//line 25: 'btn btn-block'
{/* <input type='submit' value='Save Task' className='btn btn-block' /> */ }
//onClick={() => onAdd}
// <AiOutlinePlus
//                     style={{ color: 'red', cursor: 'pointer' }}
//                     onClick={() => onAdd}
//                 />
{/* <div className='form-control'>
                    <label>Day & Time</label>
                    <input
                        type='text'
                        placeholder='Day & Time'
                        value = {day} 
                        onChange ={(e)=> setDay(e.target.value)}
                    />
                </div>
                <div className='form-control 
                form-control-check'>
                    <label>set Reminder</label>
                    <input type='checkbox' 
                        checked = {reminder}
                        value = {reminder} 
                        onChange ={(e)=> setReminder(e.currentTarget.checked)}
                    />
                    
                    //<BsPlusSquareFill
                    style={{ color: 'rgb(92, 180, 238)', cursor: 'pointer', fontSize: 40, marginLeft: '5px' }}
                    onClick={(e) => setText(e.target.value)}
                />
                </div> */
}
//color: ' #8f48eb', cursor: 'pointer', fontSize: 40, marginLeft: '5px' }}
//style={{ backgroundColor: '#8f48eb', border: 'none', color: 'white', padding: '12px 16px', fontSize: '16px', cursor: 'pointer' }}