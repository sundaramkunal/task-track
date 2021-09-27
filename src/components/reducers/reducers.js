const intialState = 0;

const updateTheTask = (state = intialState, action) => {
    switch (action.type) {
        case 'addNewTask': return intialState;
        case 'editTask': return intialState;
        case 'deleteTask': return intialState;
        case 'clearTask': return intialState;
        default: return intialState
    }
}
export default updateTheTask;
