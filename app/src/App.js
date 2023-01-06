// Node imports
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"

// MUI imports

// Page imports
import Home from "./pages/Home"

function App() {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path= "/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
