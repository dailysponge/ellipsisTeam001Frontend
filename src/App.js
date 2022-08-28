import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Assistant from './pages/Assistant';
import Authenticate from './pages/Authenticate';
import Error from './pages/Error';
import Home from './pages/Home';
import Investment from './pages/Investment';
import Performance from './pages/Performance';
import Report from './pages/Report';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Authenticate />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/performance" element={<Performance />} />
            <Route path="/dashboard/report" element={<Report />} />
            <Route path="/dashboard/invest" element={<Investment />} />
          </Route>
          <Route path="/assistant" element={<Assistant />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
