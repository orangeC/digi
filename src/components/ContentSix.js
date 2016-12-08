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
			card:{
				display:"flex",
				flexDirection:"row",
				flexWrap:"wrap",
				justifyContent:"space-around"
			},
			h1:{
				textAlign:"center",
				marginBottom:"10px",
				color:"rgb(231, 33, 14)",
				fontSize:"36px"
			}
		}
		return (
				<div style={styles.root} className="ContentSix">
					<div>
						<h1 style={styles.h1}>零基础<span style={styles.span}>入学，</span>4个月<span style={styles.span}>拥有两年项目经验</span></h1>
						<p style={styles.p}>ZERO BASE ENTRANCE, 4 MONTHS, WITH TWO YEARS EXPERIENCE IN PROJECT</p>
						<div style={styles.short}></div>
					</div>
					<div>
						a
					</div>
					<div style={styles.a}>
						<a href="#" className="search-more"  >更多学员作品</a>
					</div>
				</div>
			)
	}
}

export default ContentSix