import React, { useState, useEffect } from "react";

const Todos = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

    const users = user.filter(i => i.userId === JSON.parse(localStorage.getItem('playerId')))

  return (
    <div>
      <br />
      <h3>list of things to do:</h3>
       {users && users.map((x, idx)=> <div key={idx}><input type='checkbox'/> {x.title}</div>)}
    </div>
  );
};

export default Todos;
