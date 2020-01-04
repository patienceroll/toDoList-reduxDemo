import React from 'react';

import { List, Switch } from 'antd';

import './ToDoList.css';

import { addToDo, tuggle } from '../action/index';

class ToDoList extends React.Component {


    render() {
        return <>
            <List
                header={<div>未做事项</div>}
                bordered
                dataSource={this.props.store.getState()}
                renderItem={item => <List.Item style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Switch checkedChildren="已完成" unCheckedChildren="未完成" defaultChecked={item.isDone} onChange={() => this.props.store.dispatch(tuggle(item.detail))} />
                    <span>{item.detail}</span>
                    <span>创建时间：{item.createTime}</span>
                </List.Item>
                }

            />
        </>
    }
}
export default ToDoList;