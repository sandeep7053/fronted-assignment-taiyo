
import './App.css';
import Productitem from './component/Productitem';
import UserList from './component/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path='/' element={<UserList />} />
        <Route exect path='/CreateContact' element={<Productitem />} />
      </Routes>
    </Router>

  )
}

export default App;
