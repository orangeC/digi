import React,{Component} from "react";

class ContentSeven extends Component{
	render(){
		let styles={
			root:{
				paddingTop:"50px",
    			borderTop:"1px solid rgba(0, 0, 0, 0.0980392)",
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
				fontWeight:"400"
			},
			p:{
				fontWeight: "600",
    			fontSize: "1.1em",
    			padding:"0 10px 10px"
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
				<div style={styles.root} className="ContentSeven">
					
					<p style={styles.p} >就业保障：<span style={styles.span} >就业顾问1对1就业指导，就业推荐，提供企业专属岗位业界最权威职业素养软实力训练，全面提高职业素养、面试技巧、沟通能力等。</span></p>
					<div style={styles.a}>
						<a href="#" className="search-more"  >了解更多招聘信息</a>
					</div>
				</div>
			)
	}
}

export default ContentSeven