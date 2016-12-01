import React,{Component} from "react";
import Header from "./Header";
import Nav from "./Nav";
import Slide from "./slide.js";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";

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
