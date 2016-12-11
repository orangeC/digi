import React,{Component} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Slide from "./components/slide.js";
import ContentOne from "./components/ContentOne";
import ContentTwo from "./components/ContentTwo";
import ContentThree from "./components/ContentThree";
import ContentFour from "./components/ContentFour";
import ContentFive from "./components/ContentFive";
import ContentSix from "./components/ContentSix";
import ContentSeven from "./components/ContentSeven";
import ContentEight from "./components/ContentEight";
import ContentNine from "./components/ContentNine";
import ContentTen from "./components/ContentTen";

class App extends Component{
	render(){
		return (
				<div>
					<Header />
					<Nav />
					<Slide />
					<ContentOne />
					<ContentTwo />
					<ContentThree />
					<div className="clear" ></div>
					<ContentFour />
					<ContentFive />
					<ContentSix />
					<ContentSeven />
					<ContentEight />
					<ContentNine />
					<ContentTen />
				</div>
			)
	}
}

export default App
