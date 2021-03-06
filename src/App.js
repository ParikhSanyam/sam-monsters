import React, {Component} from 'react';
import { CardList } from './components/card-lists/card-lists';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        {/* <input 
          type='search' 
          placeholder='Search Monster' 
          onChange={e => this.setState({ searchField: e.target.value })}
          />  */}
          <h1 className="head">Relodex Monsters</h1>
          <SearchBox 
            placeholder='Search Monster'
            handleChange={e => this.setState({ searchField: e.target.value })} 
          />
        {/* console.log(e.target.value) */}
        <CardList monsters={filteredMonsters} />
      </div>
    );   
  }
}


export default App;
