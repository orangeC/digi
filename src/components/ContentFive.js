import React,{Component} from "react";
import Bg from "../img2/11.png";
import Bg1 from "../img2/12.png";
import Bg2 from "../img2/13.png";
import Bg3 from "../img2/14.png";
import Bg4 from "../img2/15.png";
import Bg5 from "../img2/16.png";
import Bg6 from "../img2/17.png";


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
					<div style={styles.top} >
						<img  src={Bg1} style={styles.img} />
						<div style={styles.card} className="step-card">
							<div>
								<img src={Bg2} />
								<h3 style={styles.h3} >林喜军</h3>
								<p><strong>Frank</strong>  北京第嘉传媒创始人，全国最大的CG培训基地火星时代原互动媒体系创始人之一，曾任职于OgilvyOne、电通、华洋联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历、10余年的教育培训经验，尤其对大学市场有着丰富的教学与营销经验。</p>
							</div>
							<div>
								<img src={Bg3} />
								<h3 style={styles.h3} >刘 健</h3>
								<p><strong>Jason</strong>  曾就职于北京创世奇迹Wonderad全国创意总监，并在OgilvyOne、麦肯光明、电通广告、AGENDA、等国际4A广告公司工作过，有多年创意方面的专业技能，而且在客户服务有丰富的经验。曾经服务过游戏客户：完美世界,网易游戏,盛大,搜狐畅游等。品牌客户IBM, Moto, DHL, LG, Airbus, WWF, JEEP, Siemens, Honda Acura众多国内外客户。</p>
							</div>
							<div>
								<img src={Bg4} />
								<h3 style={styles.h3} >陈 硕</h3>
								<p>现任金棕榈广告副总经理/创意总监，15年的广告行业从业经验，非常优秀的客户把控能力及项目开发能力。曾在多家4A及local广告公司任职负责创意策划工作，并对多家4A广告公司项目进行指导并协助完成。</p>
							</div>
							<div>
								<img src={Bg5} />
								<h3 style={styles.h3} >杨 永</h3>
								<p>现就职于北京铭硕知识产权代理有限公司。研发中心前端工程师总监，负责管理沈阳分公司前端开发工作。擅长网页重构，人机交互设计，网页构架设计，CSS框架建设，安卓apk，苹果APP应用开发。</p>
							</div>
							<div>
								<img src={Bg6} />
								<h3 style={styles.h3} >Peter</h3>
								<p>好多视频网站创始人，慕课网在线视频的主讲，疯狂的在线教育爱好者，十多年业界经验的骨灰级专家，曾在清华大学举办过沙龙，倡导推广前端技术，在github上有2k的粉丝。</p>
							</div>
						</div>
						<div style={styles.a}>
							<a href="#" className="search-more"  >查看更多师资信息</a>
						</div>
					</div>
					<div style={styles.bottom} ></div>
				</div>
			)
	}
}

export default ContentFive