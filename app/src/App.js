// Node imports
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"

// MUI imports

// Page imports
import Home     from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/Projects" element={<Projects />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
