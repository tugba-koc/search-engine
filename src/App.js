import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import List from './pages/List';
import AddLink from './pages/AddLink';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="list" element={<List />} />
        <Route path="add-link" element={<AddLink/>} />
      </Routes>
    </div>
  );
}

export default App;
