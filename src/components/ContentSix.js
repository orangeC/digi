import React,{Component} from "react";
import img1 from "../img2/11.jpg";
import img2 from "../img2/12.jpg";
import img3 from "../img2/13.jpg";
import img4 from "../img2/14.jpg";
import img5 from "../img2/15.jpg";
import img6 from "../img2/16.jpg";

class ContentSix extends Component{
	render(){
		let styles={
			root:{
				padding:"30px 20px 10px",
    			backgroundColor: "rgb(255, 255, 255)",
    			textAlign:"center"
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
			h1:{
				textAlign:"center",
				marginBottom:"10px",
				color:"rgb(231, 33, 14)",
				fontSize:"2.1em"
			}
		}
		return (
				<div style={styles.root} className="ContentSix">
					<div>
						<h1 style={styles.h1}>零基础<span style={styles.span}>入学，</span>4个月<span style={styles.span}>拥有两年项目经验</span></h1>
						<p style={styles.p}>ZERO BASE ENTRANCE, 4 MONTHS, WITH TWO YEARS EXPERIENCE IN PROJECT</p>
						<div style={styles.short}></div>
					</div>
					<div className="works-card">
						<img src={img1} />
						<img src={img2} />
						<img src={img3} />
						<img src={img4} />
						<img src={img5} />
						<img src={img6} />
					</div>
					<div style={styles.a}>
						<a href="#" className="search-more"  >更多学员作品</a>
					</div>
				</div>
			)
	}
}

export default ContentSix