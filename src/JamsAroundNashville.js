import { Outlet, Route, Routes } from 'react-router-dom'
import { AllJams } from './items/AllJams'
// import { HalloweenItems } from './items/HalloweenItems'
// import { ChristmasItems } from './items/ChristmasItems'
// import { ThanksgivingItems } from './items/ThanksgivingItems'
// import { NewDecorationForm } from './forms/NewDecorationForm'
// import { ItemDetails } from './items/ItemDetails'
import { NavBar } from './components/nav/NavBar'
// import './styles.css'

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
        {/* <Route path=":itemId" element={<ItemDetails />} />
        <Route path="halloween" element={<HalloweenItems />} />
        <Route path="christmas" element={<ChristmasItems />} />
        <Route path="thanksgiving" element={<ThanksgivingItems />} />
        <Route path="new" element={<NewDecorationForm />} /> */}
      </Route>
    </Routes>
  )
}