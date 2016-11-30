import React,{Component} from "react";

class Header extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				height:"120px",
				margin:"0 auto",
				maxWidth:"1024px"
			},
			text:{
				border:"1px solid rgb(231,33,14)",
				width:"27vw",
				height:"28px"
			},
			btn:{
				backgroundColor:"rgb(231,33,14)",
				color:"rgb(255,255,255)",
				width:"7em",
				lineHeight:"30px",
				border:"none"
			},
			left:{
				float:"left",
				fontSize:"32px",
				paddingTop:"40px"
			},
			right:{
				float:"right",
				paddingTop:"50px"
			}
		}
		return (
				<div style={styles.root}>
					<p style={styles.left}>第嘉学社</p>
					<div style={styles.right}>
						<input type="text" placeholder="手机号" style={styles.text} />
						<button style={styles.btn}>领取助学金</button>
					</div>
				</div>
			)
	}
}

export default Header
