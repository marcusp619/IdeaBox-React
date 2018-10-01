import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewIdeaForm from './NewIdeaForm';
import IdeasContainer from './IdeasContainer'
class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = idea => {
    const newIdea = {...idea, id: Date.now()};
    const ideas = [...this.state.ideas, newIdea];
    this.setState({ ideas });
  }

  removeIdea = id => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IdeaBox</h1>
        </header>
        <NewIdeaForm addIdea={this.addIdea} />
        <hr />
        <IdeasContainer ideas={this.state.ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
