import React from 'react';
import ReactDOM from 'react-dom';

// 组件
import ToDoList from './page/ToDoList.jsx';

// ant design
import { Button, Drawer, Input, message } from 'antd';
import 'antd/dist/antd.css';

// 样式
import './index.css';

// redux 相关
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toDoStore from './reducer/reducer';

// 测试代码开始
import { addToDo, saveToLocal, sortList, editItem } from './action/index';

let store = createStore(toDoStore);

// const unSubscribe = 
// store.subscribe(() => console.log('监听到状态改变:', store.getState()));


// 测试代码结束



class Header extends React.Component {
    render() {
        return <>
            <div style={{ width: '100%', height: '60px', backgroundColor: '#333' }}>
                <img src='./image/jieni.jpg' style={{ width: '45px', height: '45px', marginTop: '7.5px', marginLeft: '30px' }} alt="icon"></img>
                <span style={{ lineHight: '60px', fontSize: '40px', color: '#fff', verticalAlign: 'top', marginLeft: '40%' }}>ToDoList</span>
                <Button type="primary" onClick={() => this.props.showDrawer(true)} style={{ height: '40px', position: 'fixed', top: '10px', right: '30px' }}>添加事项</Button>
            </div>
        </>
    }
}

class App extends React.Component {
    state = {
        visiable: false,
        isAdd: true,
        value: '',
        listValue: ''
    }

    showDrawer(isAdd,detail) {
        this.setState({
            isAdd: isAdd,
            value:detail,
            listValue:detail,
            visiable: true
        })
    }

    closeDrawer() {
        this.setState({
            visiable: false,
            value: ''
        })
    }

    addList() {
        store.dispatch(addToDo(this.state.value));
        store.dispatch(sortList());
        store.dispatch(saveToLocal());
        this.closeDrawer();
        message.success('添加成功');
        this.setState({
            value: ''
        })
    }

    editListItem() {
        console.log(this.state.listValue,this.state.value);
        store.dispatch(editItem(this.state.listValue,this.state.value));
        this.closeDrawer();
        message.success('修改成功');
        this.setState({
            value: ''
        })
    }

    render() {
        return <>
            <Header showDrawer={this.showDrawer.bind(this)}></Header>

            <Drawer title={this.state.isAdd ? '添加事项' : '修改事项'} placement="bottom" closable={false} onClose={this.closeDrawer.bind(this)} visible={this.state.visiable}>
                
                <div className='addEvent'>
                    <div>{this.state.isAdd ? '添加事项' : '修改事项'}</div>
                    <Input placeholder="请输入事件描述:" onChange={(e) => this.setState({ value: e.target.value })} value={this.state.value} />
                </div>
               
                <div className='affirm'>
                    <Button type="danger" onClick={this.closeDrawer.bind(this)}>取消</Button>
                    <Button type="primary" onClick={() => { this.state.isAdd ? this.addList() : this.editListItem() }}>确定</Button>
                </div>

            </Drawer>

            <ToDoList store={store} showDrawer={this.showDrawer.bind(this)}></ToDoList>
        </>
    }
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
