import React,{Component} from "react";
import DataNav from "./DataNav"

class Nav extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				height:"50px",
				backgroundColor:"rgb(60,60,60)"
			},
			span:{
				lineHeight:"48px",
				fontSize:"18px",
				color:"rgb(255,255,255)"
			},
			wrap:{
				width:"100%",
				margin:"0 auto",
				maxWidth:"1090px",
				display:"flex",
				justifyContent:"space-around"
			}
		}
		let spans = DataNav.map( (item,i) => <a href="#" key={i}><span style={styles.span} >{item}</span></a>)
		return (
				<div style={styles.root}>
					<div style={styles.wrap}>
						{spans}
					</div>
				</div>
			)
	}
}

export default Nav
