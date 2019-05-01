import React from "react";
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import Concepts from "./Concepts";
import Resources from "./Resources";
import History from "./History";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "home"
    };
  }

  //Changes page value when button on navigation bar is hit
  changePage(page) {
    this.setState({page});
  }

  //Displays component that was selected through the navigation bar
  displayPage(page) {
    if (this.state.page === "home") {
      return <Home/>;
    }
    else if (this.state.page === "concepts"){
      return <Concepts/>;
    }
    else if (this.state.page === "history"){
      return <History/>;
    }
    else if (this.state.page === "resources"){
      return <Resources/>;
    }
  }

  render() {
    var page = this.displayPage(this.state.page)

    return (
      <div>
        <div>
          <Header changePage={this.changePage.bind(this)} page={this.state.page}/>
        </div>
        <div>
          {page}
        </div>
        <div>
          <Footer changePage={this.changePage.bind(this)} page={this.state.page}/>
        </div>
      </div>
    );
  }
}
