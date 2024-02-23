import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import { Button } from '@mui/material';
import Viewstudent from './components/Viewstudent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Addstudent/>}/>
        <Route path='/v' element={<Viewstudent/>}/>
      </Routes>
        
        </div>
      
  );
}

export default App;
