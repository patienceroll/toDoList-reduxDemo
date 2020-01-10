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
            return state.filter((item) => item.isDone === false).concat(state.filter((item) => item.isDone === true));

        case 'edit':
            // 如果遍历的 todo 列表 item.detail 等于传进来的 detail，则改变为新的 editDetail，且每次都返回 item
            return state.map(item => item.detail === action.detail && (item.detail = action.editDetail) && item || item);

        default:
            return JSON.parse(localStorage.getItem('state')) || [];
    }
}
export default toDoStore;