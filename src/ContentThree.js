import React,{Component} from "react";
import Bg from "./img2/4.png";

class ContentThree extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				textAlign:"center",
				paddingTop:"30px",
				paddingBottom:"50px",
				maxWidth:"2000px",
				margin:"0 auto",
				float:"left",
				borderBottom: "1px solid rgb(204, 204, 204)"
			},
			h1:{
				marginBottom:"10px",
				color:"rgb(231, 33, 14)",
				fontSize:"2.2em"
			},
			span:{
				color:"rgb(40,40,40)"
			},
			p:{
				color:"rgb(123, 123, 123)",
				textTransform: "uppercase",
				fontSize:"0.9em",
				marginBottom:"10px"
			},
			short:{
				width:"4em",
				height:"3px",
				backgroundColor:"red",
				margin:"10px auto 0"
			},
			img:{
				display:"block",
				maxWidth:"830px",
				width:"80%",
				margin:"0 auto 20px"
			}
		}
		return (
				<div style={styles.root} className="contentThree">
					<h1 style={styles.h1}><span style={styles.span}>就业岗位</span></h1>
					<p style={styles.p}>EMPLOYMENT</p>
					<div style={styles.short}></div>
					<img style={styles.img} src={Bg} />
				</div>
			)
	}
}

export default ContentThree