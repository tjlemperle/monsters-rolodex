import React, {Component} from 'react'

import {CardList} from './Components/card-list/card-list.component'

import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state ={
      monsters: []
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => this.setState({ monsters: users}))
  }

  render(){
    return(
      <div className="App">
        <CardList monsters={this.state.monsters}>
        {this.state.monsters.map(monster => (
        <h1> { monster.name } </h1>
        ))}
        </CardList>
      </div>
    )
    };
}

export default App;
