import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewPerson = () => {
  const [person, setPerson] = useState({
    characterName: '',
    actorName: '',
    mainCharacter: true,
    human: true,
    placeId: '',
  })
  const [personId, setPersonId] = useState()
  const [
    wasPersonCreatedSuccessfully,
    setWasPersonCreatedSuccessfully,
  ] = useState(false)

  const updatePersonObject = e => {
    e.persist()
    setPerson(prevPerson => {
      return {
        ...prevPerson,
        [e.target.name]: e.target.value,
      }
    })
  }
  const submitPerson = async e => {
    e.preventDefault()
    const isValid = Object.keys(person).reduce((acc, key) => {
      return acc && person[key] !== ''
    }, true)

    if (isValid) {
      const resp = await axios.post('https://localhost:5001/api/Person', {
        ...person,
      })
      if (resp.status === 200) {
        setPersonId(resp.data.id)
      }
    }
  }

  useEffect(() => {
    if (personId) {
      setWasPersonCreatedSuccessfully(true)
    }
  }, [personId])

  return wasPersonCreatedSuccessfully ? (
    <Redirect to={'/'} />
  ) : (
    <div>
      <form onSubmit={submitPerson}>
        <input
          type="text"
          placeholder="Character Name"
          value={person.characterName}
          name="characterName"
          onChange={updatePersonObject}
        />
        <input
          type="text"
          placeholder="Actor Name"
          value={person.actorName}
          name="actorName"
          onChange={updatePersonObject}
        />
        <button>CREATE</button>
      </form>
    </div>
  )
}

export default NewPerson
