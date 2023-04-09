import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { Form, Label } from "reactstrap";

export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        fullName: "",
        isAdmin: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("jam_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isStaff
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <Form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register </h1>
                <fieldset className="loginFieldSet">
                    <Label htmlFor="fullName"> Full Name </Label>
                    <input onChange={updateCustomer}
                           type="text" id="fullName" className="form-control-login"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset className="loginFieldSet">
                    <Label htmlFor="email"> Email address </Label>
                    <input onChange={updateCustomer}
                        type="email" id="email" className="form-control-login"
                        placeholder="Email address" required />
                </fieldset>
                    <button className="submit" type="submit"> Register </button>
            </Form>
        </main>
    )
}