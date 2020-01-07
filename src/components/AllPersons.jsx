import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllPersons = () => {
  const apiUrl = 'https://localhost:5001/api/Person'
  const [persons, setPersons] = useState([])

  const getPersonsData = async () => {
    const resp = await axios.get(apiUrl)
    setPersons(resp.data)
  }

  useEffect(() => {
    getPersonsData()
  }, [])

  return (
    <>
      <section className="items">
        {persons.map(person => {
          return (
            <ul>
              <li> Key: {person.id} </li>
              <li> Character Name: {person.characterName} </li>
              <li> Actor Name: {person.actorName} </li>
              <li>Main Character: {person.mainCharacter}</li>
              <li> Human: {person.human}</li>
            </ul>
            
          )
        })}
      </section>
    </>
  )
}

export default AllPersons
