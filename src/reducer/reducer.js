const toDoStore = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    'isDone': false,
                    'createTime': action.createTime,
                    'detail': action.detail
                }
            ]
        case 'tuggleIsDone':
            return [
                ...state.map((item) => item.detail === action.detail && (item.isDone = !item.isDone) && item || item)
            ]
        default:
            return state;
    }
}
export default toDoStore;