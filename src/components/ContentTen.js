import React,{Component} from "react";
import Img1 from "../img2/20.png";
import Img2 from "../img2/21.png";
import Img3 from "../img2/22.png";
import Img4 from "../img2/23.png";
import Img5 from "../img2/24.png";


class ContentTen extends Component{
	render(){
		let styles={
			root:{
    			backgroundColor: "rgb(246, 0, 29)",
			},
			root1:{
				padding:"50px 0 20px",
    			width:"100%",
    			maxWidth:"1024px",
    			margin:"0 auto"
			},
			img1:{
				left:"25%",
				top:"-20px"
			},
			img2:{
				left:"70%",
				top:"35px"
			},
			img3:{
				left:"55%",
				top:"40px"
			},
			img4:{
				left:"40%",
				top:"-25px"
			},
			p:{
				color: "rgb(255, 255, 255)",
    			marginTop: "10px"
			},
			mid:{
				clear:"both"
			}
		}
		return (
				<div style={styles.root} className="rootTen">
					<div style={styles.root1} className="contentTen">
						<div className="footer-left" >
							<div className="footer-h3" >
								<h3>高薪就业就选第嘉学社</h3>
								<img src={Img1} style={styles.img1} />
								<img src={Img2} style={styles.img2} />
								<img src={Img3} style={styles.img3} />
								<img src={Img4} style={styles.img4} />
							</div>
							<p style={styles.p} >秦皇岛第嘉</p>
							<p>秦皇岛市海港区金梦海湾1号秦海路84号4层</p>
							<p>电话：0335-7104491&nbsp;&nbsp;&nbsp;&nbsp;15703387810&nbsp;&nbsp;&nbsp;&nbsp;QQ : 3205653686</p>
							<p style={styles.p} >北京第嘉</p>
							<p>北京朝阳区建国路93号万达广场写字楼A&nbsp;&nbsp;&nbsp;&nbsp;电话：400-600－7366</p>
							<p style={styles.p} >沈阳第嘉</p>
							<p>沈阳市沈北新区道义南大街江南甲第D座10-27&nbsp;&nbsp;&nbsp;&nbsp;电话：400-600－7366</p>
							<p>（地铁2号线航空航天大学站A出口即是）</p>
							<p style={styles.p} >深圳第嘉</p>
							<p>深圳市南山高新科技园南区高新南一道德赛科技大厦604室&nbsp;&nbsp;&nbsp;&nbsp;电话：400-600－7366</p>
						</div>
						<div style={styles.mid}></div>
						<div className="footer-right" >
							<input type="text" placeholder="请输入手机号" />
							<br/>
							<button>报名领取助学金</button>
							<img src={Img5} />
						</div>
					</div>
				</div>
			)
	}
}

export default ContentTen