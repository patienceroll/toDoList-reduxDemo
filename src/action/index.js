import { add, tuggleIsDone, saveToLocalStorage,sortToDoList,deleteItem } from '../actionType/index';
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

export {
    addToDo,
    tuggle,
    saveToLocal,
    sortList,
    delItem
}