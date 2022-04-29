import './App.css'
import { Route, Routes } from 'react-router';
import { Home } from "./components/Home"
import  List  from './components/HomePage';
import { Navbar } from './components/Navbar'
function App() {  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/limit-perpage" element={<Home />}></Route>
        <Route path="/" element={<List />}></Route>        
      </Routes>
    </div>
  );
}

export default App
