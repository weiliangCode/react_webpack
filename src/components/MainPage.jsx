import React from 'react'
import HeaderCom from './HeaderCom.jsx'
import ContentCom from './ContentCom.jsx'


export default class MainPage extends React.Component{
	//设置状态，这个方法不管用了
//	getInitialState(){
//		console.log('getInitialState')
//	}
	
	//构造函数
	constructor(){
		super();
		//设置初始状态
		this.state = {
			str: 'hello world',
			obj: {
				name: 'wangwu'
			},
			message: ''
		}
	}
	
	render(){
		return (
			<div className="page">
				<HeaderCom/>
				<ContentCom words={this.state.str} sendMes={this.getMes.bind(this)}/>
				<div>
					<button onClick={this.btnAction.bind(this)}>按钮</button>
					
					<hr/>
					<p>
						接收子组件的内容为:<br/>
						{this.state.message}
					</p>
				</div>
			</div>
		)
	}
	
	//在自定义的事件中，this指向为null，需要外部调用时，需要bind该组件对象
	btnAction(){
		console.log(this)
		
		//修改state的值
		this.setState({str: 'hi'});
		
	}
	
	getMes(val){
		console.log('接收到了数据'+val);
		
		this.setState({message: val})
	}
	
}

