import React, {Component} from 'react'

import PersonList from './PersonList'
import PersonEdit from './PersonEdit'

class App extends Component {
  state = {
    people: [
      {firstName: 'Alan', lastName: 'Turing'}
    ],
    view: 'PersonList',

  }

  onEdit = (person) => {
    this.setState({
      view: 'PersonEdit',
      selectedPerson: person
    })
  }

  get currentView() {
    if (this.state.view === 'PersonEdit') {
      return <PersonEdit person={this.state.selectedPerson}/>
    }

    return <PersonList people={this.state.people} onEdit={this.onEdit}/>
  }

  render() {
    return (
      <div className="App">
        {this.currentView}
      </div>
    )
  };
}

export default App
