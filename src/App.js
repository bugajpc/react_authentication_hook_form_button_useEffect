import logo from './logo.svg';
import Login from './Login';
import Timer from './Timer';
import Counter from './Counter';
import Form from './Form';
import './App.css';
import { useState } from 'react';

function App() {
  const[isAuthenticated, setIsAuthenticated] = useState(false)
  const[user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome!</p>
          <button onClick={handleLogout}>Log out</button>
          <br></br>
          <Timer/>
          <br></br>
          <Counter/>
          <Form/>
        </div>
      ) : (
        <Login onLogin={handleLogin}/>
      ) }
    </div>
  );
}

export default App;
