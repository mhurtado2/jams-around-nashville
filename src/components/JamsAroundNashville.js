
import { NavLink, Route, Routes } from "react-router-dom"
import { NavBar} from "./nav/NavBar"
import './styles.css'
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"



export const JamsAroundNashville = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar />
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}