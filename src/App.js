import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/performance" element={<Performance />} />
          <Route path="/home/report" element={<Report />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
