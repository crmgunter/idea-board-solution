import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`

const ToDoItem = styled.div`
  margin: 20px;
  width: 100px;

  input {
    width: 100px;
  }
`

class IdeaPage extends Component {
  state = {
    ideas: [{}]
  }

  componentDidMount() {
    this.getIdeas()
  }

  getIdeas = () => {
    axios.get(`/api/users/${this.props.match.params.userId}/ideas`)
    .then((res) => {
      console.log(res.data)
      this.setState({ ideas: res.data})
    })
  }

  createIdea = () => {
    axios.post(`/api/users/${this.props.match.params.userId}/ideas`)
    .then((res) => {
      const newIdeas = [...this.state.ideas]
      console.log(res.data)
      newIdeas.push(res.data)
      this.setState({ ideas: newIdeas })
    })
  }

  handleChange = (idea, event) => {
    const newIdeas = [...this.state.ideas]
    const ideas = newIdeas.map((savedIdea) => {
      if (savedIdea._id === idea._id) {
        savedIdea[event.target.name] = event.target.value
      }
      return savedIdea
    })
    this.setState({ideas: ideas})
  }

  updateIdea = (idea, e) => {
    e.preventDefault()
    axios.patch(`/api/ideas/${idea._id}`, idea).then(res => {
      console.log('blur')
    })
  }

  deleteIdea = (idea) => {
    axios.delete(`/api/ideas/${idea._id}`)
    .then((res) => {
      this.getIdeas()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello from Idea Page</h1>
        <button onClick={this.createIdea}>New Idea</button>
        <FlexContainer>
        {this.state.ideas.map((idea, i) => (
          <ToDoItem onBlur={(e) => this.updateIdea(idea, e)} key={i}>
          <div onClick={() => this.deleteIdea(idea)}>X</div>
            <div><input type="text" name="title" value={idea.title} onChange={(e) => this.handleChange(idea, e)}/></div>
            <div><textarea name="description" value={idea.description} onChange={(e) => this.handleChange(idea, e)}/></div>
          </ToDoItem>
        ))}
        </FlexContainer>
      </div>
    );
  }
}

export default IdeaPage;