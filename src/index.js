import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

function Home() {
  return <h1>Home!</h1>;
}

function About() {
  return <h1>This is my about component!</h1>;
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

/* add the NavBar component to our App component */
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
