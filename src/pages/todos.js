import React, { useState, useEffect } from "react";

const Todos = () => {

  const [user, setUser] = useState([]);
  const [todolist, setTodolist] = useState([])
  const [sortValue, setSortValue] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  const users = user.filter(
    (i) => i.userId === JSON.parse(localStorage.getItem("playerId"))
  );
  
  const handleChange = (e) => {
    setSortValue(e.target.value);
  const arr = [...users];
  switch (e.target.value) {
      case 'order':
          setTodolist(sortFunc('order', arr, 'id'))
          break;
      case 'completed':
          setTodolist(sortFunc('completed', arr, 'completed'))
          break;
      case 'abc':
          setTodolist(sortFunc('abc', arr, 'title'))
          break;
      case 'random':
          setTodolist(sortFunc('random', arr, 'id'))
          break;
      default: break;
  };

  function sortFunc(type, arr, key) {
    switch (type) {
        case 'order':
            arr.sort((a, b) => {
                let x = a[key];
                let y = b[key];
                return x - y
            });
            break;
        case 'completed':
            arr.sort((a, b) => {
                let x = a[key];
                let y = b[key];
                return x === y ? 0 : x ? -1 : 1
            });
            break;
        case 'abc':
            arr.sort((a, b) => {
                let x = a[key].charAt(0);
                let y = b[key].charAt(0);
                return x < y ? -1 : x > y ? 1 : 0
            });
            break;
        case 'random':
            arr.sort(() => 0.5 - Math.random());
            break;

        default: break;
    };
    return arr;
};
  }

  return (
    <div>
      <br />
      <h3>list of things to do:</h3>

      <select name="orderCheckbox" id="" onChange={handleChange}>
        <option value="" selected disabled>
          Select the order
        </option>
        <option value="order">Order</option>
        <option value="abc">Abc</option>
        <option value="random">Random</option>
        <option value="completed">Completed</option>
      </select>

      <table>
        <tbody>
          {todolist &&
            todolist.map((x, idx) => (
              <tr key={idx}>
                <td>
                  <input type="checkbox" name={idx} checked={x.completed}/>
                </td>
                <td>{x.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
