import React,{Component} from "react";
import Bg from "../img2/5.png";
import Bg1 from "../img2/6.png";
import Bg2 from "../img2/7.png";

class ContentFour extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				padding:"30px 10px",
				float:"left",
				textAlign:"center"
			},
			h1:{
				textAlign:"center",
				color:"rgb(246, 0, 29)",
				fontSize:"1.5em",
				fontWeight:"300"
			},
			span:{
				fontWeight:"600"
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
				margin:"10px auto 25px"
			},
			clearfix:{
				width:"100%",
				maxWidth:"1024px",
				margin:"10px auto 0"
			},
			h3:{
				marginTop: "20px",
    			marginBottom: "10px",
    			fontWeight:"300",
    			fontSize:"1.5em"
			},
			pp:{
				color:"#282828",
				lineHeight:"1.9em",
				fontSize:"0.9em",
				margin:"0 0 15px"
			},
			img:{
				boxShadow:"0 0 10px 3px rgba(0,0,0,0.2)",
				width:"100%",
				marginTop:"10px"
			},
			card:{
				float:"left",
				padding:"10px 30px"
			}
		}
		return (
				<div style={styles.root} className="ContentFour">
					<h3 style={styles.h3} >茫茫人海中   <span style={styles.span} >你是哪一个</span></h3>
					<div></div>
					<h3 style={styles.h1} ><span style={styles.span}>改变现状</span>   只需<span style={styles.span}>4</span>个月</h3>
				</div>
			)
	}
}

export default ContentFour