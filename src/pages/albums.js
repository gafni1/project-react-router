import React, {useState, useEffect} from 'react'
import { useLocation, Link, Outlet, NavLink, Navigate, useNavigate, useParams } from 'react-router-dom';

const Albums = () => {

    const {albumId}= useParams() 

    const [userpost, setUserpost] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
          .then((response) => response.json())
          .then((json) => setUserpost(json));
      }, []);

    const users = userpost.filter(i => i.userId === JSON.parse(localStorage.getItem('playerId')))

  return (
    <div>
    <br />
    {useLocation().pathname ==='/dashboard/albums' &&
    <div> <h3>My Albums</h3>
    <h5>select a album - </h5>
    <div >    
          {users && users.map((x, idx)=> <div className='albums'><Link to={`${x.id}`} key={idx}>{x.title}</Link></div>)} 
    </div>
   </div> 
   }
   <Outlet/>
    </div>
  )
}

export default Albums