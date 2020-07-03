import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from 'axios'

interface IValue {
  id: number,
  name: string
}

class App extends Component {
  state =  {
    values: Array<IValue>()
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      this.setState({
        values: response.data
      })
    })
  }
  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
            {this.state.values.map(v => {
              return <List.Item key={v.id}>{v.id}-{v.name}</List.Item>
            })}
        </List>      
    </div>
    )
  }
}

export default App;
