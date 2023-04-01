import { Outlet, Route, Routes } from 'react-router-dom'
import { AllJams } from './components/jams/AllJams'
import { BluesJams } from './components/jams/BluesJam'
import { CountryJams } from './components/jams/CountryJam'
import { JamDetails } from './components/jams/JamDetails'
import { JazzJams } from './components/jams/JazzJam'
import { RbJams } from './components/jams/RbAndSoulJam'
import { NavBar } from './components/nav/NavBar'
import { NewJamForm } from './components/forms/NewJamForm'

import './styles.css'
import { JamEdit } from './components/jams/EditJam'


export const JamsAroundNashville = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
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