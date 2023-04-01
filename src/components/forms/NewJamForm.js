import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NewJamForm = () => {
  const [userChoices, setUserChoices] = useState({
    name: '',
    imageUrl: '',
    genreId: 0,
    address: '',
    areaOfTownId: 0
  })
  const [jams, setJams] = useState([])
  const [genres, setGenres] = useState([])
  const [locations, setLocations] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8088/jams')
      .then((res) => res.json())
      .then((jamsData) => {
        setJams(jamsData)
      })

    fetch('http://localhost:8088/genres')
      .then((res) => res.json())
      .then((genresData) => {
        setGenres(genresData)
      })
      fetch('http://localhost:8088/areasOfTown')
      .then((res) => res.json())
      .then((locationsData) => {
        setLocations(locationsData)
      })
      
  }, [])

  const handleSaveJam = (evt) => {
    evt.preventDefault()

    if (
      userChoices.name &&
      userChoices.imageUrl &&
      userChoices.genreId &&
      userChoices.address
    ) {
      fetch('http://localhost:8088/jams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userChoices),
      }).then(() => {
        fetch(`http://localhost:8088/jams`).then(() => {
          navigate('/')
        })
      })
    } else {
      alert('Yo, fill out my form.')
    }
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a Jam</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item name"
            value={userChoices.name}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.name = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL: </label>
          <input
            required
            id="imgUrl"
            type="text"
            className="form-control"
            placeholder="example.com"
            value={userChoices.imageUrl}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.imageUrl = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Genre: </div>
          {genres.map((genreObj) => {
            return (
              <div key={genreObj.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={genreObj.id}
                    checked={userChoices.genreId === genreObj.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.genreId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {genreObj.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Address: </label>
          <input
            required
            id="imgUrl"
            type="text"
            className="form-control"
            placeholder="example.com"
            value={userChoices.address}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.address = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Area of Town: </div>
          {locations.map((areaObj) => {
            return (
              <div key={areaObj.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={areaObj.id}
                    checked={userChoices.areaOfTownId === areaObj.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.areaOfTownId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {areaObj.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <button
        className="btn"
        onClick={(event) => {
          handleSaveJam(event)
        }}
      >
        Add Jam
      </button>
    </form>
  )
}
