import React, { Component } from 'react';
import CardList from './Components/CardList';
import Form from './Components/Form';

import './App.css';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  };
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
