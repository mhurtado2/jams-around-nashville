import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const JamDetails = () => {
  const [jam, setJam] = useState({})

  const { jamId } = useParams()

  useEffect(() => {
    fetch(
      `http://localhost:8088/jams/${jamId}?_expand=genre&_expand=location`
    )
      .then((res) => res.json())
      .then((jamData) => {
        setJam(jamData)
      })
  }, [])

  return (
    <div className="jam-detail-container">
      <h3 className="jam-detail-name">Jam details: {jam?.name}</h3>
      <img src={jam?.imageUrl} alt={jam?.name} className="jam-img" />
      <div className="jam-details">Genre: {jam?.genre?.name}</div>
      <div className="jam-details">Venue Name: {jam?.venueName}</div>
      <div className="jam-details">Jam Name: {jam?.jamName}</div>
      <div className="jam-details">Address: {jam?.address}</div>

    </div>
  )
}