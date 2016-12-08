import React,{Component} from "react";


class ContentSix extends Component{
	render(){
		let styles={
			root:{
				padding:"30px 20px 10px",
    			backgroundColor: "rgb(255, 255, 255)",
    			textAlign:"center",
    			borderBottom: "1px solid rgb(204, 204, 204)"
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
			img:{
				width:"100%",
				maxWidth:"200px",
				marginTop: '20px',
    			marginBottom: '20px'
			},
			a:{
				textAlign:"center",
				padding:"50px 0"
			},
			card:{
				display:"flex",
				flexDirection:"row",
				flexWrap:"wrap",
				justifyContent:"space-around"
			},
			h3:{
				padding:"5px 0"
			}
		}
		return (
				<div style={styles.root} className="ContentSix">
					<div>
						<h1 style={styles.h1}>薪资<span style={styles.span}>不断攀升，发展</span>潜力无限</h1>
						<p style={styles.p}>RISING WAGES AND DEVELOPMENT POTENTIAL</p>
						<div style={styles.short}></div>
					</div>
					<div>
						a
					</div>
					<div style={styles.a}>
						<a href="#" className="search-more"  >点击申请在线免费试听课程</a>
					</div>
				</div>
			)
	}
}

export default ContentSix