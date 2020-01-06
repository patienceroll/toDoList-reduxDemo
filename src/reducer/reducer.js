const toDoStore = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    'isDone': false,
                    'createTime': action.createTime,
                    'detail': action.detail
                },
            ]

        case 'tuggleIsDone':
            return state.map((item) => item.detail === action.detail && (item.isDone = !item.isDone) && item || item)

        case 'saveToLocalStorage':
            return localStorage.setItem('state', JSON.stringify(state)) || state;

        case 'deleteItem':
            return state.filter((item) => item.detail !== action.detail);

        case 'sortToDoList':
            return state.filter((item)=>item.isDone === false).concat(state.filter((item)=>item.isDone === true));

        default:
            return JSON.parse(localStorage.getItem('state')) || [];
    }
}
export default toDoStore;