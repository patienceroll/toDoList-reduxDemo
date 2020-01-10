import { add, tuggleIsDone, saveToLocalStorage,sortToDoList,deleteItem ,edit} from '../actionType/index';
import formatDate from '../plugs/formatDate';


function addToDo(detail) {
    const date = formatDate();
    return {
        type: add,
        detail: detail,
        createTime: date
    }
}

function tuggle(detail) {
    return {
        type: tuggleIsDone,
        detail: detail
    }
}

function saveToLocal() {
    return {
        type: saveToLocalStorage
    }
}

function sortList(){
    return {
        type:sortToDoList
    }
}

function delItem(detail){
    return {
        type:deleteItem,
        detail
    }
}

function editItem(detail,editDetail){
    return {
        type:edit,
        detail,
        editDetail
    }
}
export {
    addToDo,
    tuggle,
    saveToLocal,
    sortList,
    delItem,
    editItem
}