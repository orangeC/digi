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
			},
			pp:{
				width:"90%",
				whiteSpace:"nowrap",
				lineHeight:"2.0",
				paddingLeft:"10px",
				overflow:"hidden",
				cursor: "pointer",
				textOverflow: "ellipsis",
				paddingBottom:"10px"
			},
			span:{
				position:"absolute",
				right:"5px",
				top:"4px",
				cursor:"pointer"
			}
		}
		return (
				<div style={styles.root} className="ContentNine">
					<h1 style={styles.h1}>学校动态</h1>
					<p style={styles.p}>SCHOOL DYNAMIC</p>
					<div style={styles.top} ></div>
					<div style={styles.mid} >
						<p style={styles.pp} >用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘</p>
						<span style={styles.span} >更多></span>
					</div>
					<div style={styles.mid} >
						<p style={styles.pp} >用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘</p>
						<span style={styles.span} >更多></span>
					</div>
					<div style={styles.mid} >
						<p style={styles.pp} >用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘</p>
						<span style={styles.span} >更多></span>
					</div>
					<div style={styles.a}>
						<a href="#" className="search-more"  >了解更多招聘信息</a>
					</div>
				</div>
			)
	}
}

export default ContentNine