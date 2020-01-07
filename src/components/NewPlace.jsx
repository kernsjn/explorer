import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewPlace = () => {
  const [place, setPlace] = useState({
    placeName: '',
    shortDescription: '',
  })
  const [placeId, setPlaceId] = useState()
  const [
    wasPlaceCreatedSuccessfully,
    setWasPlaceCreatedSuccessfully,
  ] = useState(false)

  const updatePlaceObject = e => {
    e.persist()
    setPlace(prevPlace => {
      return {
        ...prevPlace,
        [e.target.name]: e.target.value,
      }
    })
  }
  const submitPlace = async e => {
    e.preventDefault()
    const isValid = Object.keys(place).reduce((acc, key) => {
      return acc && place[key] !== ''
    }, true)

    if (isValid) {
      const resp = await axios.post('https://localhost:5001/api/Place', {
        ...place,
      })
      if (resp.status === 200) {
        setPlaceId(resp.data.id)
      }
    }
  }

  useEffect(() => {
    if (placeId) {
      setWasPlaceCreatedSuccessfully(true)
    }
  }, [placeId])

  return wasPlaceCreatedSuccessfully ? (
    <Redirect to={`/1`} />
  ) : (
    <div>
      <form onSubmit={submitPlace}>
        <input
          type="text"
          placeholder="Place Name"
          value={place.placeName}
          name="placeName"
          onChange={updatePlaceObject}
        />
        <input
          type="text"
          placeholder="Short Description"
          value={[place].shortDescription}
          name="shortDescription"
          onChange={updatePlaceObject}
        />

        <button>CREATE</button>
      </form>
    </div>
  )
}

export default NewPlace
