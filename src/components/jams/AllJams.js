import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AllJams = () => {
  const [jams, setJams] = useState([]) // returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable
  const navigate = useNavigate()

  // Use Effect watches for state change
  // It takes two arguments, a function and an array
  // The array is which states we want to observe
  // The function is what we want to do when that observed state changes
  useEffect(() => {
    console.log('I only run once')
    fetch(`http://localhost:8088/jams`)
      .then((res) => res.json())
      .then((jamsArray) => {
        setJams(jamsArray)
      })
  }, []) // An empty dependency array will watch for the initial render of the component and only run the callback on that  initial run.

  const navigateToJamDetails = (jamId) => {
    navigate(`/${jamId}`)
  }

  return (
    <div className="jams-container">
      {jams.map((jamObj) => {
        return (
          <div className="jam-card" key={jamObj.id}>
            <img
              src={jamObj.imageUrl}
              alt={jamObj.name}
              className="jam-img"
              onClick={() => {
                navigateToJamDetails(jamObj.id)
              }}
            />
            <div className="jam-name">{jamObj.name}</div>
          </div>
        )
      })}
    </div>
  )
}
