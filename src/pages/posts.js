import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
    const [userpost, setUserpost] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then((response) => response.json())
          .then((json) => setUserpost(json));
      }, []);

    const users = userpost.filter(i => i.userId === JSON.parse(localStorage.getItem('playerId')))

  return (
    <div>
    <br />
    <h3>My Posts</h3>
    <h5>select a post - </h5>
    <table><tbody>
    {users && users.map((x, idx)=> <tr key={idx}><td><Link to={`${x.id}`} className={'link'} >{x.title}</Link></td></tr>)}
    </tbody></table>
    <Outlet/>
    </div>
  )
}

export default Posts;