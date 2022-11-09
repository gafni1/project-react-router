import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className='section'>
        <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    <Link to="/" className="btn">Back Home</Link>
    </section>
  );
};
export default Error;
