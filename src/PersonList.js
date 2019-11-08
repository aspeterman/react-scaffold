import React from 'react'

const PersonList = (props) => {
  return (
    <ul>
      {props.people.map((person, i) =>
        <li key={i}>{`${person.firstName} ${person.lastName}`}<a onClick={() => {props.onEdit(person)}}>edit</a></li>
      )}
    </ul>
  )
}

export default PersonList