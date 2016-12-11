import React,{Component} from "react";


class ContentTen extends Component{
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
				height: "1px",
    			marginTop: "30px",
    			marginBottom: "15px",
    			backgroundColor: "rgb(229, 229, 229)"
			},
			p:{
				color:"rgb(123, 123, 123)",
				textTransform: "uppercase",
				textAlign:"center",
				fontSize:"0.9em",
				marginBottom:"10px"
			},
			a:{
				textAlign:"center",
				padding:"50px 0"
			},
			h1:{
				textAlign:"center",
				marginBottom:"10px",
				color:"rgb(40,40,40)",
				fontSize:"2.1em"
			},
			mid:{
				borderBottom: "1px solid rgb(229, 229, 229)",
    			position: "relative"
			}
		}
		return (
				<div style={styles.root} className="ContentTen">
					s
				</div>
			)
	}
}

export default ContentTen