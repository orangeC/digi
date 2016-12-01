import React,{Component} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Slide from "./components/slide.js";
import ContentOne from "./components/ContentOne";
import ContentTwo from "./components/ContentTwo";
import ContentThree from "./components/ContentThree";

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
				</div>
			)
	}
}

export default App
