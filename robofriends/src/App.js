import React, { Component } from 'react';
import Card_list from "./Card_list";
import { robots } from "./robots"
import Search_Bar from "./Search_Bar";
import Scroll_View from "./Scroll_View";

class App extends Component{
  constructor(){
  super();
  this.state= {
    robots: robots,
    searchText: ''
  }}

  textUpdated= (event) => {
    this.setState({searchText: event.target.value});
  }

  render(){
    const final=this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    })
    return(
      <div className="tc">
        <h1 className='f1'> RoboFriends </h1>
        <Search_Bar textUpdated={this.textUpdated}/>
        <Scroll_View>
        <Card_list robots={final}/>
        </Scroll_View>
      </div>
    );
  }
}

export default App;
