import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Header/NavBar';
import Content from './components/Main/Content';


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Content count={count} setCount={setCount}/>
      <Footer/>
    </div>
  )
}

export default App
