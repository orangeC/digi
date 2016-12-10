import React,{Component} from "react";

class ContentEight extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				padding:"30px 0",
    			backgroundColor: "rgb(242, 242, 242)"
			},
			top:{
				width: "100%",
    			maxWidth: "1024px",
    			margin: "0px auto",
			},
			span:{
				color:"rgb(40,40,40)"
			},
			p:{
				color:"rgb(123, 123, 123)",
				textTransform: "uppercase",
				fontSize:"0.9em",
				marginBottom:"10px",
				textAlign:"center"
			},
			short:{
				width:"4em",
				height:"3px",
				backgroundColor:"red",
				margin:"10px auto 0"
			},
			a:{
				textAlign:"center",
				padding:"50px 0"
			},
			h1:{
				textAlign:"center",
				marginBottom:"10px",
				color:"rgb(231, 33, 14)",
				fontSize:"2.1em"
			}
		}
		return (
				<div style={styles.root} className="ContentEight">
					<div>
						<h1 style={styles.h1}><span style={styles.span}>百余家合作企业，近千个就业岗位虚位以待</span></h1>
						<h1 style={styles.h1}>期待你的加入</h1>
						<p style={styles.p}>LOOKING FORWARD TO YOUR JOINING</p>
						<div style={styles.short}></div>
					</div>
					
				</div>
			)
	}
}

export default ContentEight