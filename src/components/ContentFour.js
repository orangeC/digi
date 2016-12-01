import React,{Component} from "react";
import Bg from "../img2/5.png";
import Bg1 from "../img2/6.png";
import Bg2 from "../img2/7.png";
import Bg3 from "../img2/8.png";
import Bg4 from "../img2/9.png";
import Bg5 from "../img2/10.png";

class ContentFour extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				padding:"30px 10px",
				float:"left",
			},
			main:{
				width:"100%",
				maxWidth:"1090px",
				margin:"0 auto",
				padding:"20px",
				display:"flex",
				flexWrap:"wrap",
				justifyContent:"space-between"
			},
			h1:{
				textAlign:"center",
				color:"rgb(246, 0, 29)",
				fontSize:"1.5em",
				fontWeight:"300"
			},
			span:{
				fontWeight:"600"
			},
			h4:{
				textAlign: "center",
    			lineHeight: "2",
    			color: "#fff",
    			margin:"0",
    			fontSize:"1.1em",
    			fontWeight:"600"
			},
			p:{
				width: "100%",
    			padding: "20px 10px",
    			overflow: "hidden"
			},
			h3:{
				marginTop: "20px",
    			marginBottom: "10px",
    			fontWeight:"300",
    			fontSize:"1.5em",
    			textAlign:"center"
			},
			img:{
				marginTop:"5px",
				border:"0"
			},
			card:{
				width:"32%",
				boxShadow: "0 0 10px 1px rgba(0,0,0,.2)"
			}
		}
		return (
				<div style={styles.root} className="ContentFour">
					<h3 style={styles.h3} >茫茫人海中   <span style={styles.span} >你是哪一个</span></h3>
					<div style={styles.main} className="four-main" >
						<div style={styles.card} className="four-card" >
							<h4 style={styles.h4} className="one" >在校大学生</h4>
							<img src={Bg3} />
							<img src={Bg} style={styles.img} />
							<div style={styles.p} >
								<p>你还在为大学里学的课程和企业要求不匹配而烦恼吗？</p>
								<p>你还在担心大学毕业后找不到理想工作而忧虑吗？</p>
								<p>你还在为花了父母几万块钱，脑袋里面空空而痛苦吗？</p>
								<p>你还在不能给父母最后的回报而伤心吗？</p>
							</div>
						</div>
						<div style={styles.card} className="four-card" >
							<h4 style={styles.h4} className="two" >在职</h4>
							<img src={Bg4} />
							<img src={Bg1} style={styles.img} />
							<div style={styles.p} >
								<p>你还在企业边缘岗，每天看主管脸色吗？</p>
								<p>你还在因为自己没有专业技能，无法提升而烦恼吗？</p>
								<p>你还在单位浑浑噩噩的混日子吗？</p>
								<p>你还在为迟迟不加薪而着急吗？</p>
							</div>
						</div>
						<div style={styles.card} className="four-card" >
							<h4 style={styles.h4} className="three" >没有工作</h4>
							<img src={Bg5} />
							<img src={Bg2} style={styles.img} />
							<div style={styles.p} >
								<p>你还在为毕业了没有找到满意的工作而痛苦吗？</p>
								<p>你还在为没有一技之长而着急吗？</p>
								<p>你还在为不能自食其力而苦恼吗？</p>
								<p>你还在创业找不到方向而迷茫吗？</p>
							</div>
						</div>
					</div>
					<h3 style={styles.h1} ><span style={styles.span}>改变现状</span>   只需<span style={styles.span}>4</span>个月</h3>
				</div>
			)
	}
}

export default ContentFour