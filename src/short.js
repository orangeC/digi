import React,{Component} from "react";

class short extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				marginTop:"30px"
			},
			h1:{
				textAlign:"center",
				marginBottom:"20px",
				color:"rgb(231, 33, 14)",
				fontSize:"36px"
			},
			span:{
				color:"rgb(40,40,40)"
			},
			span2:{
				color:"rgb(231, 33, 14)"
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
			}
		}
		return (
				<div style={styles.root} >
					<h1 style={styles.h1}>互联网+时代<span style={styles.span}>/不懂IT技术迟早被淘汰</span></h1>
					<p style={styles.p}><span style={styles.span2}>internet + age don't</span> understand it technology to be eliminated<br/>
eliminated sooner or later</p>
					<div style={styles.short}></div>
					
				</div>
			)
	}
}

export default short