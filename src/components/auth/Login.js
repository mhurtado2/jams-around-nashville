import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Label } from "reactstrap";
import "./Login.css";


export const Login = () => {
  const [email, set] = useState("mhurtado1@berklee.edu");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "jam_user",
            JSON.stringify({
              id: user.id,
              admin: user.isAdmin,
            })
          );

          navigate("/");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <main className="container--login">
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>The Nashville Jam Finder</h1>
          <h3>Please sign in</h3>
          <div className="login-form">
            <fieldset className="loginFieldSet">
            <Label className="email" htmlFor="inputEmail">
              {" "}
              Email address{" "}
            </Label>
            <input
              type="email"
              value={email}
              onChange={(evt) => set(evt.target.value)}
              className="form-control-login"
              placeholder="Email address"
              required
              autoFocus
            />
            </fieldset>
            <button className="submit" type="submit">
              Sign in
            </button>

            <div className="btn-box">
                <Link to="/register">Not a member yet?</Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

