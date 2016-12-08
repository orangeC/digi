import React,{Component} from "react";
import Bg3 from "../img2/3.png";


class ContentTwo extends Component{
	render(){
		let styles={
			root2:{
				padding:"40px 10px",
				textAlign:"center",
				width:"100%",
				borderTop:"1px solid rgba(0, 0, 0, 0.0980392)",
				float:"left",
				backgroundColor:"rgb(242, 242, 242)"
			},
			h1:{
				textAlign:"center",
				marginBottom:"20px",
				color:"rgb(231, 33, 14)",
				fontSize:"2.1em"
			},
			span:{
				color:"rgb(40,40,40)"
			},
			p:{
				textAlign:"center",
				color:"rgb(123, 123, 123)",
				textTransform: "uppercase",
				fontSize:"0.9em",
				marginBottom:"10px"
			},
			short:{
				width:"4em",
				height:"3px",
				backgroundColor:"red",
				margin:"0 auto"
			},
			pp:{
				margin:"15px auto",
				fontSize:"1.2em"
			},
			img:{
				display:"block",
				maxWidth:"960px",
				width:"90%",
				margin:"0 auto 20px"
			}
		}
		return (
				<div style={styles.root2}>
					<h1 style={styles.h1}>薪资<span style={styles.span}>不断攀升，发展</span>潜力无限</h1>
					<p style={styles.p}>RISING WAGES AND DEVELOPMENT POTENTIAL</p>
					<div style={styles.short}></div>
					<div style={styles.pp}>学员平均薪资高出一般工程师</div>
					<img style={styles.img} src={Bg3} />
					<a className="search-more"  href="#" >了解更多行业咨询</a>
				</div>
			)
	}
}

export default ContentTwo