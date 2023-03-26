import { Outlet, Route, Routes } from 'react-router-dom'
import { AllJams } from './components/jams/AllJams'
import { JamDetails } from './components/jams/JamDetails'
// import { HalloweenItems } from './items/HalloweenItems'
// import { ChristmasItems } from './items/ChristmasItems'
// import { ThanksgivingItems } from './items/ThanksgivingItems'
// import { NewDecorationForm } from './forms/NewDecorationForm'
import { NavBar } from './components/nav/NavBar'
import './styles.css'


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
        {/* <Route path="halloween" element={<HalloweenItems />} />
        <Route path="christmas" element={<ChristmasItems />} />
        <Route path="thanksgiving" element={<ThanksgivingItems />} />
        <Route path="new" element={<NewDecorationForm />} />  */}
      </Route>
    </Routes>
  )
}