import logo from './logo.svg';
import './App.css';
import { createBrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Authenticate from './components/Authenticate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticate />
      </header>
    </div>)
}

export default App;
