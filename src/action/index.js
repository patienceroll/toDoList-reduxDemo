import { add, tuggleIsDone } from '../actionType/index';
import formatDate from '../plugs/formatDate';

function addToDo(detail){
    const date = formatDate();
    console.log('添加一个项目',date);
    return {
        type:add,
        detail:detail,
        createTime:date
    }
}

function tuggle(detail){
    return  {
        type:tuggleIsDone,
        detail:detail
    }
}

export {    
    addToDo,
    tuggle
}