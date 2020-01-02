import React from 'react';
import ReactDOM from 'react-dom';

import List from './page/ToDoList.jsx';

import { Button, Drawer } from 'antd';

import './index.css';
import 'antd/dist/antd.css';

class Header extends React.Component {
    render() {
        return <>
            <div style={{ width: '100%', height: '60px', backgroundColor: '#333' }}>
                <img src='./image/jieni.jpg' style={{ width: '45px', height: '45px', marginTop: '7.5px', marginLeft: '30px' }} alt="icon"></img>
                <span style={{ lineHight: '60px', fontSize: '40px', color: '#fff', verticalAlign: 'top', marginLeft: '40%' }}>ToDoList</span>
                <Button type="primary" onClick={() => this.props.addEvent()} style={{height:'40px',position:'fixed',top:'10px',right:'30px'}}>添加事项</Button>
            </div>
        </>
    }
}

class App extends React.Component {
    state = {
        visiable:false
    }

    addEvent(){
        this.setState({
            visiable:true
        })
    }

    closeDrawer(){
        this.setState({
            visiable:false 
        })
    }

    render() {
        return <>
            <Header addEvent={this.addEvent.bind(this)}></Header>

            <List></List>

            <Drawer title="添加事项" placement="bottom" closable={false} onClose={this.closeDrawer.bind(this)} visible={this.state.visiable}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
