import React,{Component} from "react";


class ContentNine extends Component{
	render(){
		let styles={
			root:{
				padding:"30px 0",
    			backgroundColor: "rgb(255, 255, 255)",
    			width:"100%",
    			maxWidth:"1024px",
    			margin:"0 auto"
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
				marginBottom:"10px"
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
				<div style={styles.root} className="ContentNine">
					a
				</div>
			)
	}
}

export default ContentNine