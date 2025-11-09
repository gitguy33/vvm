import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homex } from './components/home_page';
import { Location } from './components/location_page';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homex/>}/>
          <Route path="/location" element={<Location/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
