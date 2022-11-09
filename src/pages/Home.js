import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect( ()=> {  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => localStorage.setItem("users", JSON.stringify(json)))}, [])
  return (
      <section className="section">
       <h2>Home</h2>
       <h3>JSON Placeholder</h3>
       <p>JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
       <Link to="login" className="btn">login</Link>
      </section>
  );
};
export default Home;
