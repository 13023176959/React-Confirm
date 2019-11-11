import React from 'react';
import ReactDOM,{ unmountComponentAtNode }  from 'react-dom';
import './index.css';
import confirm from './confirm.jsx';
import * as serviceWorker from './serviceWorker';

// 请写一个满足以下要求的confirm方法组件（可以参考一下 ， antd 的 Modal 组件的 Modal.info, Modal.waring . 这样的用法 ）：
//
// （1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；
//
// （2）能通过返回值判断用户点击的是确定还是取消。
//
//
//
// async componentDidMount(){
//     let res = await confirm("确定删除吗")
//     if(res) {
//         console.log("是")
//     } else {
//         console.log("否")
//     }
// }

// function confirm(props){
//     return (
//         <div>
//             <Confirm
//                 width={props.width}
//                 height={props.height}
//                 visible={props.visible}
//                 title={props.title}
//                 content={props.content}
//                 opacit={props.opacit}
//                 onOk={props.onOk}
//                 onCancel={props.onCancel}
//             />
//
//         </div>
//     )
//
// }


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: true,
            title: 'React Modal',
            content: '欢迎使用！',
        }
    }
    onOk(){
        this.setState({visible:false});
        unmountComponentAtNode(document.getElementById('modal'));
        console.log('onOk');
    }
    onCancel(){
        this.setState({visible:false});
        unmountComponentAtNode(document.getElementById('modal'));
        console.log('onCancel');
    }
    render() {
        return (
            <div>
                欢迎使用
            </div>
        );
    }


    async componentDidMount(){
        let res =  await confirm(
            {
                width:'520px',
                height:'520px',
                visible:this.state.visible,
                title:this.state.title,
                content:this.state.content,
                opacit:0.66,
                onOk:this.onOk.bind(this),
                onCancel:this.onCancel.bind(this)
            }
        )
        if(res) {
            let body = document.getElementById('root');
            this.container = document.createElement('div');
            this.container.id = 'modal';
            body.appendChild(this.container);
            ReactDOM.render(res, document.getElementById('modal'));
            console.log("是")
        } else {
            console.log("否")
        }


    }
    componentDidUpdate() {
        console.log('update',this.state.visible)
    }

}




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
