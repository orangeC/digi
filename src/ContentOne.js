import React,{Component} from "react";
import Bg2 from "./img2/2.jpg";
import Bg from "./img2/1.jpg";

class ContentOne extends Component{
	render(){
		let styles={
			root1:{
				width:"100%",
				float:"left",
				padding:"30px 10px"
			},
			h1:{
				textAlign:"center",
				marginBottom:"20px",
				color:"rgb(231, 33, 14)",
				fontSize:"2.2em"
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
				margin:"10px auto 25px"
			},
			clearfix:{
				width:"100%",
				maxWidth:"1024px",
				margin:"10px auto 0"
			},
			h2:{
				color:"#fff",
				backgroundColor:"#e7210e",
				textAlign:"center",
				marginBottom:"15px",
				lineHeight:"2",
				whiteSpace:"nowrap"
			},
			pp:{
				color:"#282828",
				lineHeight:"1.9em",
				fontSize:"0.9em",
				margin:"0 0 15px"
			},
			img:{
				boxShadow:"0 0 10px 3px rgba(0,0,0,0.2)",
				width:"100%",
				marginTop:"10px"
			},
			card:{
				float:"left",
				padding:"10px 30px"
			}
		}
		return (
				<div style={styles.root1} className="contentOne">
					<h1 style={styles.h1}>互联网+时代<span style={styles.span}>/不懂IT技术迟早被淘汰</span></h1>
					<p style={styles.p}><span style={styles.span2}>internet + age don't</span> understand it technology to be eliminated<br/>
eliminated sooner or later</p>
					<div style={styles.short}></div>
					<div style={styles.clearfix}>
						<div style={styles.card} className="card">
							<h2 style={styles.h2}>薪资高，让同龄人遥不可及</h2>
							<p className="pp" style={styles.pp}>web前端开发源于传统的互联网，互联网普及让人才需求量居高不下，随着移动互联网的高速发展，移动终端的前端开发也越来越受到重视，因此薪水自然也高，据智联招聘、51job、拉勾、猎聘网等招聘网站得到的数据，web前端工程师的平均薪资都在万元以上，是真正的高薪职业。</p>
							<img style={styles.img} src={Bg} />
						</div>
						<div style={styles.card} className="card">
							<h2 style={styles.h2}>人才缺口大 现在是入行最佳时机</h2>
							<p className="pp" style={styles.pp}>在互联网高速发展的今天，web前端工程师是市场上紧缺的高技能人才，每天有数万家企业招聘该岗位，以北京为例，每天就有近9000条web前端工程师职位招聘，可以说web前端工程师就业前景广阔，符合未来发展趋势。人才缺口大，现在是入行最佳时机。</p>
							<img style={styles.img} src={Bg2} />
						</div>	
					</div>
				</div>
			)
	}
}

export default ContentOne