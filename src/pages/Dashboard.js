import { Link, Outlet } from "react-router-dom";

const Dashboard = ({ user }) => {

  function logout(){
      localStorage.removeItem("player");
      localStorage.removeItem("playerId");
    }

  return (
    <section className='section'>
      <h4>Hello, {user.username}</h4>
      <Link to="info" className="btn">Info</Link>{" "}
      <Link to="/" onClick={logout}  className="btn">Logout</Link> <hr />
      <Link to="todos" className="btn">todos</Link>{" "}
      <Link to="posts" className="btn">posts</Link>{" "}
      <Link to="albums" className="btn">albums</Link>{" "} 
    <Outlet/>
    </section>
  );
};
export default Dashboard;
