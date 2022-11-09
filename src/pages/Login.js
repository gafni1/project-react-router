import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !password) {return alert("All fields must be filled!!")}
    
    let users = JSON.parse(localStorage.getItem("users")) || []
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.username == username && user.address.geo.lat.slice(-4) == password) {
          setUser({username:username, password:password})
          localStorage.setItem("player", JSON.stringify(user.username)) 
          localStorage.setItem("playerId", JSON.stringify(user.id))
          alert(`Hello ${user.username}, Connecting immediately.. `)}
          navigate('/dashboard'); 
      }
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='username' className='form-label'>
          username
          </label>
          <input
            type='text'
            className='form-input'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
          password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
