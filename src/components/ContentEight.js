import React,{Component} from "react";
import Img1 from "../img2/20.jpg";
import Img2 from "../img2/21.jpg";
import Img3 from "../img2/22.jpg";
import Img4 from "../img2/23.jpg";
import Img5 from "../img2/24.jpg";
import Img6 from "../img2/25.jpg";
import Img7 from "../img2/26.jpg";
import Img8 from "../img2/27.jpg";
import Img11 from "../img2/30.jpg";
import Img12 from "../img2/31.jpg";
import Img13 from "../img2/32.jpg";
import Img14 from "../img2/33.jpg";
import Img15 from "../img2/34.jpg";
import Img16 from "../img2/35.jpg";
import Img17 from "../img2/36.jpg";
import Img18 from "../img2/37.jpg";
import Img19 from "../img2/19.png";

class ContentEight extends Component{
	render(){
		let styles={
			root:{
				width:"100%",
				padding:"30px 0",
    			backgroundColor: "rgb(242, 242, 242)"
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
				marginBottom:"10px",
				textAlign:"center"
			},
			short:{
				width:"4em",
				height:"3px",
				backgroundColor:"red",
				margin:"10px auto 30px"
			},
			h1:{
				textAlign:"center",
				marginBottom:"10px",
				color:"rgb(231, 33, 14)",
				fontSize:"2.1em"
			},
			center:{
				width:"100%",
				maxWidth:"1090px",
				padding:"20px 0",
				borderTop:"1px solid rgb(204, 204, 204)",
				margin:"0 auto"
			},
			card:{
				display:"flex",
				flexDirection: "row",
    			flexWrap: "wrap",
    			justifyContent: "space-around",
    			width: "100%"
			},
			a:{
				textAlign:"center",
				padding:"20px 0"
			},
			img:{
				display:"block",
				margin:"0 auto",
				width:"90%",
				maxWidth:"460px",
				position:"relative",
				top:"-10px"
			}
		}
		return (
				<div style={styles.root} className="ContentEight">
					<h1 style={styles.h1}><span style={styles.span}>百余家合作企业，近千个就业岗位虚位以待</span></h1>
					<h1 style={styles.h1}>期待你的加入</h1>
					<p style={styles.p}>LOOKING FORWARD TO YOUR JOINING</p>
					<div style={styles.short}></div>
					<div style={styles.center} >
						<div style={styles.card} >
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img1} />
									</div>
									<img src={Img11} />
								</div>
								<h3>郝小军</h3>
								<p>就职： 乐视</p>
								<p>薪资： <span>15000</span>/月</p>
								<p>毕业院校： 河北科技师范学院</p>
							</div>
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img2} />
									</div>
									<img src={Img12} />
								</div>
								<h3>戴金明</h3>
								<p>就职： 北京链家地产</p>
								<p>薪资： <span>12000</span>/月</p>
								<p>毕业院校： 河北科技师范学院</p>
							</div>
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img3} />
									</div>
									<img src={Img13} />
								</div>
								<h3>姜 文</h3>
								<p>就职： 百度</p>
								<p>薪资： <span>13000</span>/月</p>
								<p>毕业院校： 东北石油</p>
							</div>
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img4} />
									</div>
									<img src={Img14} />
								</div>
								<h3>孙璐璐</h3>
								<p>就职： 优酷土豆</p>
								<p>薪资： <span>15000</span>/月</p>
								<p>毕业院校： 河北科技师范学院</p>
							</div>
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img5} />
									</div>
									<img src={Img15} />
								</div>
								<h3>余 昊</h3>
								<p>就职： 网易</p>
								<p>薪资： <span>30万元/</span>年</p>
								<p>毕业院校： 武汉大学</p>
							</div>
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img6} />
									</div>
									<img src={Img16} />
								</div>
								<h3>张军雅</h3>
								<p>就职： HTC</p>
								<p>薪资： <span>15000</span>/月</p>
								<p>毕业院校： 南京艺术师范学院</p>
							</div>
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img7} />
									</div>
									<img src={Img17} />
								</div>
								<h3>王少静</h3>
								<p>就职： 小米科技</p>
								<p>薪资： <span>15000</span>/月</p>
								<p>毕业院校： 河北理工大学</p>
							</div>
							<div className="coo-list">
								<div className="coo-img">
									<div>
										<img src={Img8} />
									</div>
									<img src={Img18} />
								</div>
								<h3>孔 越</h3>
								<p>就职： 搜狐sohu</p>
								<p>薪资： <span>12000</span>/月</p>
								<p>毕业院校： 沈阳大学</p>
							</div>
						</div>
					</div>
					<div style={styles.a}>
						<a href="#" className="search-more"  >查看更多师资信息</a>
					</div>
					<h1 style={styles.h1}><span style={styles.span}>他们已经实现了</span>完美蜕变<span style={styles.span}>，月薪万元</span>只需一个电话</h1>
					<img  src={Img19} style={styles.img} />
				</div>
			)
	}
}

export default ContentEight