import React,{Component} from "react";
import Bg from "./img/2.jpg";
import Bg3 from "./img/3.jpg";
import Bg4 from "./img/4.jpg";
import Bg5 from "./img/1.jpg";

class Slide extends Component{
	constructor(){
		super();
		this.state={
			nowshow:0
		}
	}
	tick(i){
		clearInterval(this.autoPlayFlag);
		this.setState({nowshow:this.state.nowshow + i});
		this.autoPlayFlag = setInterval( this.tick.bind(this,1),2000)
	}
	componentWillUpdate(nextProps,nextState){
		if(nextState.nowshow>3){
			this.setState({nowshow:0})
		}
		if(nextState.nowshow<0){
			this.setState({nowshow:3})
		}
	}
	goPlay(){
		this.autoPlayFlag = setInterval( () => {
			this.tick(1);
		},2000);
	}
	componentDidMount(){
		this.goPlay()
	}
	Jump(x){
		this.setState({nowshow:x})
	}
	pausePlay(){
		clearInterval(this.autoPlayFlag)
	}
	render(){
		let styles={
			root:{
				width:"100%",
				overflow:"hidden",
				position:"relative"
			},
			ul:{
				width:"400%",
				transform:"translateX(-" + this.state.nowshow*25 + "%)",
				transition:"all 0.5s"
			},
			li:{
				float:"left",
				width:"25%"
			},
			img:{
				display:"block",
				width:"100%"
			},
			left:{
				width:"2em",
				height:"2em",
				borderRadius:"50%",
				backgroundColor:"rgba(255,255,255,0.5)",
				position:"absolute",
				top:"50%",
				left:"2%",
				marginTop:"-1em",
				lineHeight:"2em",
				textAlign:"center",
				cursor:"pointer"
			},
			right:{
				width:"2em",
				height:"2em",
				borderRadius:"50%",
				backgroundColor:"rgba(255,255,255,0.5)",
				position:"absolute",
				top:"50%",
				marginTop:"-1em",
				right:"2%",
				lineHeight:"2em",
				textAlign:"center",
				cursor:"pointer"
			}
		}
		return (
				<div style={styles.root} onMouseOver={this.pausePlay.bind(this)} onMouseOut={this.goPlay.bind(this)}>
					<ul style={styles.ul}>
						<li style={styles.li}><img style={styles.img} src={Bg} /></li>
						<li style={styles.li}><img style={styles.img} src={Bg3} /></li>
						<li style={styles.li}><img style={styles.img} src={Bg4} /></li>
						<li style={styles.li}><img style={styles.img} src={Bg5} /></li>
					</ul>
					<span style={styles.left} onClick={this.tick.bind(this,-1)}>&lt;</span>
					<span style={styles.right} onClick={this.tick.bind(this,1)}>&gt;</span>
				</div>
			) 
	}
}
export default Slide