import React from 'react'
import { shallow } from 'enzyme'

import PersonList from './PersonList'

describe('PersonList', () => {
  it('renders a ul', () => {
    const wrapper = shallow(<PersonList people={[]}/>)

    expect(wrapper.find('ul')).toHaveLength(1)
  })

  it('renders an li for each person', () => {
    const people = [
      {firstName: 'foo', lastName: 'bar'},
      {firstName: 'Bruce', lastName: 'Wayne'},
      {firstName: 'Bruce', lastName: 'Wayne'},
    ]
    const wrapper = shallow(<PersonList people={people}/>)

    expect(wrapper.find('li')).toHaveLength(people.length)
  })

  it('renders the first and last name of each Person', () => {
    const person = {firstName: 'TikaTika', lastName: 'SlimShady'}
    const wrapper = shallow(<PersonList people={[person]}/>)

    expect(wrapper.find('li').text()).toContain(person.firstName)
    expect(wrapper.find('li').text()).toContain(person.lastName)
    expect(wrapper.find('a').text()).toEqual('edit')
  })

  it('calls onEdit with the person when clicked', () => {
    const person = {firstName: 'Super', lastName: 'man'}
    const mockOnEdit = jest.fn()
    const wrapper = shallow(<PersonList people={[person]} onEdit={mockOnEdit}/>)

    wrapper.find('a').simulate('click')

    expect(mockOnEdit).toHaveBeenCalledWith(person)
  })
})