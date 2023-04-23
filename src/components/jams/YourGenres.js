import { useState, useEffect } from 'react'

export const YourGenres = () => {
  const [userGenres, setUserGenres] = useState([]) // returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable
 
  // Use Effect watches for state change
  // It takes two arguments, a function and an array
  // The array is which states we want to observe
  // The function is what we want to do when that observed state changes


  const localJamUser = localStorage.getItem("jam_user");
  const jamUserObject = JSON.parse(localJamUser);


  useEffect(() => {
    console.log('I only run once')
    fetch(`http://localhost:8088/userGenres?_expand=user&_expand=genre`)
      .then((res) => res.json())
      .then((uGArray) => {
        setUserGenres(uGArray)
      })
  }, []) // An empty dependency array will watch for the initial render of the component and only run the callback on that  initial run.

  return (
    <div className="jams-container">
    
{userGenres.map((genreObj) => {
  if (jamUserObject.admin || jamUserObject.id === genreObj.userId) {
    return (
      <div className="jam-card" key={genreObj.id}>
        <div className="user-name">{genreObj?.user?.fullName}</div>
        <div className="genre-name">{genreObj?.genre?.name}</div>
      </div>
    )
  } else {
    return null;
  }
})
}
    </div>
  )
}


// {jamUserObject.admin ||
//     jamUserObject.id === userGenres.userId ? (    
//       userGenres.map((genreObj) => {
//         return (
//           <div className="jam-card" key={genreObj.id}>
//             <div className="user-name">{genreObj?.user?.fullName}</div>
//             <div className="genre-name">{genreObj?.genre?.name}</div>
//           </div>
//         )
//       })
//       ) : (
//         <>
//         </>

//       )}