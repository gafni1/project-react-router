import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

const Comments = () => {
  const [mycomments, setMycomments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((json) => setMycomments(json));
  }, []);

  return (
    <div>
      <h3>comments</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {mycomments &&
              mycomments.map((x, idx) => (
                <tr key={idx}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.body}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
};

export default Comments;
