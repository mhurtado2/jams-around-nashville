import { Outlet, Route, Routes } from 'react-router-dom'
import { AllJams } from '../jams/AllJams'
import { BluesJams } from '../jams/BluesJam'
import { CountryJams } from '../jams/CountryJam'
import { JamDetails } from '../jams/JamDetails'
import { JazzJams } from '../jams/JazzJam'
import { RbJams } from '../jams/RbAndSoulJam'
import { NewJamForm } from '../forms/NewJamForm'
import { JamEdit } from '../jams/EditJam'

export const ApplicationViews = () => {
  return (
    <Routes>


      <Route
        path="/"
        element={
          <>
       
            <Outlet />
          </>

        }
      >
        <Route index element={<AllJams />} />
        <Route path=":jamId" element={<JamDetails />} />
         <Route path="jazz" element={<JazzJams />} />
        <Route path="country" element={<CountryJams />} />
        <Route path="blues" element={<BluesJams />} />
        <Route path="rbandsoul" element={<RbJams />} />
        <Route path="new" element={<NewJamForm />} /> 
        <Route path="edit/:jamId" element={<JamEdit />} />
      </Route>
    </Routes>
  )
}