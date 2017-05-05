import React from 'react'


class ContentCom extends React.Component{
	render(){
		return (
			<div className="content">
				<div ref="mybox" className="box"></div>
				内容
				{this.props.words.name}
				<button onClick={this.btnAction.bind(this)}>按钮</button>
				<p>
					<input type="text" ref="input" />
					<button onClick={this.sendAction.bind(this)}>发送</button>
				</p>
			</div>
		)
	}
	
	btnAction(){
		//获得box标签
//		var box = document.querySelector('.box');
//		console.log(box)

		//dom操作建议使用：
		console.log(this.refs.mybox)
		
	}
	
	sendAction(){
		//获得输入框中的值
		var val = this.refs.input.value;
		this.props.sendMes(val);
	}
	
	
}

//自身也可以设置属性，但是设置了就修改不了了
//等价于getDefaultProps
ContentCom.defaultProps = {
	name: 'zhangsan'
}

//ContentCom.propTypes = {
//	words: React.PropTypes.string
//}


module.exports = ContentCom



