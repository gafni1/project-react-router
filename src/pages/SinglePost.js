import React, { useState, useEffect } from "react"; 
import { Link, Outlet, useParams } from "react-router-dom";

const SinglePost = () => {

  const { postId } = useParams();

  const [userpost, setUserpost] = useState([]);
    
  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((json) => setUserpost(json));
    }, [postId]);

  return (
    <section className='section product'>
      <hr />
      <h2>Post {postId}</h2>
      <h3>{userpost && userpost.title}</h3>
      <p>{userpost && userpost.body}</p>
      <Outlet/>
      <Link to='comments' className="btn">comments</Link>
      
     </section>
   
  );
};

export default SinglePost;