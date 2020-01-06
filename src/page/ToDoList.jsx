import React from 'react';

import { List, Switch, Button, Modal } from 'antd';

import './ToDoList.css';

import { tuggle, saveToLocal, sortList, delItem } from '../action/index';


const { confirm } = Modal;
function showConfirm() {
    confirm({
        title: '确定要清空所有事项吗?',
        content: '此操作不可逆',
        onOk() {
            localStorage.clear();
            window.location.reload();
        }
    });
}



class ToDoList extends React.Component {
    render() {
        const store = this.props.store;
        const list = store.getState();
        return <>
            <List
                header={
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>事项</span>
                        <Button type="danger" onClick={() => { showConfirm() }}>清空</Button>
                    </div>
                }
                bordered
                dataSource={list}
                renderItem={item =>
                    <List.Item style={{ display: 'flex', justifyContent: 'space-around' }}>

                        <Switch checkedChildren="已完成" unCheckedChildren="未完成" checked={item.isDone} onChange={async () => {
                            await store.dispatch(tuggle(item.detail));
                            await store.dispatch(sortList());
                            await store.dispatch(saveToLocal());
                            this.forceUpdate();
                        }} />

                        <span>{item.detail}</span>
                        <span>创建时间：{item.createTime}</span>

                        <Button type="danger" onClick={() => {
                            store.dispatch(delItem(item.detail));
                            store.dispatch(saveToLocal());
                            this.forceUpdate();
                        }}>删除</Button>

                    </List.Item>
                }
            />
        </>
    }
}
export default ToDoList;