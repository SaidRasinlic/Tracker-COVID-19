import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continent/:continent" element={<ContinentsPage />} />
        <Route path="/country/:country" element={<CountriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
