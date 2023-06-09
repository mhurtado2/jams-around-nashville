import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NewJamForm = () => {
  const [userChoices, setUserChoices] = useState({
    jamName: '',
    venueName:'',
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

  const localJamUser = localStorage.getItem("jam_user")
  const jamUserObject = JSON.parse(localJamUser)

  const handleSaveJam = (evt) => {
    evt.preventDefault()

    const jamToSendToAPI ={
        userId: jamUserObject.id,
        jamName: userChoices.jamName,
        venueName:userChoices.venueName,
        imageUrl: userChoices.imageUrl,
        genreId: userChoices.genreId,
        address: userChoices.address,
        areaOfTownId: userChoices.areaOfTownId
      };

    if (
      userChoices.jamName &&
      userChoices.venueName &&
      userChoices.imageUrl &&
      userChoices.genreId &&
      userChoices.address
    ) {
      fetch('http://localhost:8088/jams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jamToSendToAPI),
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
          <label htmlFor="jamName">Jam Name: </label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item name"
            value={userChoices.jamName}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.jamName = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="venueName">Venue Name: </label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item name"
            value={userChoices.venueName}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.venueName = event.target.value
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
