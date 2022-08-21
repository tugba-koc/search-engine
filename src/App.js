import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import List from './pages/List';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
