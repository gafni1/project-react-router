import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Info = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${localStorage.getItem(
        "playerId"
      )}`
    )
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <br />
      <h3>User information</h3>
      <div>
        Name : {user && user.name} <br />
        User Name : {user && user.username} <br />
        Phone: {user && user.phone} <br />
        Email : {user && user.email} <br />
        Website : {user && user.website}
        <br />
        <br />
        Address - <br />
        Street : {user && user.address.street} <br />
        Suite : {user && user.address.suite} <br />
        City : {user && user.address.city} <br />
        <br />
        Company - <br />
        Name : {user && user.company.name} <br />
        Societas Descriptio : {user && user.company.bs} <br />
        Catch Phrase : {user && user.company.catchPhrase} <br />
      </div>
    </div>
  );
};

export default Info;
