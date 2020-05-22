import React,{ Component } from "react";
import {CardList} from './components/Card-list'
import {Search} from './components/Search-box'
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchlist: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users => this.setState({  monsters : users})) 

  }
  render() {
    const {monsters,searchlist} = this.state;
    const fliteredmonster = monsters.filter(
                monster => monster.name.toLowerCase().includes(searchlist.toLowerCase()) 
            )
    return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <Search  
            placeholder = "Search Monsters"
            handleChange = {e => this.setState({searchlist:e.target.value})}
          />  
          <CardList monsters={fliteredmonster}/>
        </div>
    );
  }
}

export default App;
