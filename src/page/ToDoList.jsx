import React from 'react';

import { List, Switch, Button, Modal, Row, Col } from 'antd';

import './ToDoList.css';

import { tuggle, saveToLocal, sortList, delItem } from '../action/index';


const { confirm } = Modal;
function showConfirm() {
    confirm({
        title: '确定要清空所有事项吗?',
        content: '此操作不可逆',
        cancelText: '取消',
        okText:'确定',
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
                    <List.Item >
                        <Row style={{width:'100%'}}>
                            <Col span={4}>
                                <Switch checkedChildren="已完成" unCheckedChildren="未完成" checked={item.isDone} onChange={() => {
                                    store.dispatch(tuggle(item.detail));
                                    store.dispatch(sortList());
                                    store.dispatch(saveToLocal());
                                    this.forceUpdate();
                                }} />
                            </Col>

                            <Col span={8}>
                                <span>{item.detail}</span>
                            </Col>

                            <Col span={8}>
                                <span>创建时间：{item.createTime}</span>
                            </Col>

                            <Col span={4}>
                                <Button type="primary" onClick={() => this.props.showDrawer(false, item.detail)}>修改</Button>
                                <Button type="danger" onClick={() => {
                                    store.dispatch(delItem(item.detail));
                                    store.dispatch(saveToLocal());
                                    this.forceUpdate();
                                }}>删除</Button>
                            </Col>

                        </Row>
                    </List.Item>
                }
            />
        </>
    }
}
export default ToDoList;