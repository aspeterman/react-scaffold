import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const personList = wrapper.find(PersonList)

    expect(personList).toHaveLength(1)
  });

  it('Has people', () => {
    const people = wrapper.state().people
    expect(people).toHaveLength(1)
    expect(people[0]).toEqual({firstName: 'Alan', lastName: 'Turing'})
  })

  it('passes people and onEdit to PersonList', () => {
    const personList = wrapper.find(PersonList)

    expect(personList.props().people).toEqual(wrapper.state().people)
    expect(personList.props().onEdit).toEqual(wrapper.instance().onEdit)
  })

  it('has onEdit that will change the view to PersonEdit and set the selectedPerson', () => {
    //setup
    const person = {firstName: 'Alan', lastName: 'Turing'}

    expect(wrapper.state().view).toEqual('PersonList')
    expect(wrapper.state().selectedPerson).toEqual(undefined)

    //exercise
    wrapper.instance().onEdit(person)

    //assert
    expect(wrapper.state().view).toEqual('PersonEdit')
    expect(wrapper.state().selectedPerson).toEqual(person)
  })

  it('renders the edit view when the state property is PersonEdit, and hands it selectedPerson', () => {
    const person = {firstName: 'Alan', lastName: 'Turing'}

    wrapper.setState({view: 'PersonEdit', selectedPerson: person})

    const personEdit = wrapper.find(PersonEdit)
    expect(personEdit).toHaveLength(1)
    expect(personEdit.props().person).toEqual(person)
  })
})
