import React,{Component} from "react";
import Bg from "../img2/11.png";


class ContentFive extends Component{
	render(){
		let styles={
			root:{
				paddingTop: "30px",
    			paddingBottom: "10px",
    			backgroundColor: "rgb(242, 242, 242)"
			},
			top:{
				width: "100%",
    			maxWidth: "1024px",
    			margin: "0px auto",
    			borderBottom: "1px solid rgb(204, 204, 204)"
			},
			span:{
				fontWeight:"400"
			},
			p:{
				fontWeight: "600",
    			fontSize: "1.1em",
    			paddingLeft: "5px",
    			paddingBottom:"10px"
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
			}
		}
		return (
				<div style={styles.root} className="ContentFive">
					<div style={styles.top} >
						<img  src={Bg} style={styles.img} />
						<p style={styles.p} >pc端模块：<span style={styles.span} >div＋css网站重构，浏览器兼容，网站交互特效，数据交互技术，面向对象编程思想及模块化开发原理</span></p> 
						<p style={styles.p} >移动端模块：<span style={styles.span} >css3动画，响应式设计，H5开发，微信场景开发技术，Web App开发</span></p> 
						<p style={styles.p} >全栈模块：<span style={styles.span} >最新mean技术栈，es6，nodejs，reactjs组件化开发等技术</span></p> 
						<p style={styles.p} >全国首创ui+web前端课程，熟悉完整工作流程，减少沟通阻力，实现与ui设计师工作完美对接</p> 
						<div style={styles.a}>
							<a href="#" className="search-more"  >了解详细课程内容</a>
						</div>
					</div>
					<div style={styles.center} ></div>
					<div style={styles.bottom} ></div>
				</div>
			)
	}
}

export default ContentFive