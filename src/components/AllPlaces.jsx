import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllPlaces = () => {
  const [places, setPlaces] = useState([])

  const getPlace = async () => {
    const resp = await axios.get(`https://localhost:5001/api/place`)
    setPlaces(resp.data)
  }

  useEffect(() => {
    getPlace()
  }, [])

  return (
    <>
      <h2>All Ships</h2>
      <section>
        {places.map(places => {
          return (
            <>
              <h4>Name: {places.placeName}</h4>
              <p>Description: {places.shortDescription}</p>
              <hr />
            </>
          )
        })}
      </section>
    </>
  )
}
export default AllPlaces
