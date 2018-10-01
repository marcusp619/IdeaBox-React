import React, { Component } from 'react'

export default class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addIdea(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label name="name">Enter Title</label>
        <input name="name" onChange={this.onChange} value={this.state.name} />
        <br />
        <label name="description">Enter Description</label>
        <input name="description" onChange={this.onChange} value={this.state.description} />
        <br />
        <button>Submit</button>
        </form>
    )
  }
}
