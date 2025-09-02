// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* your routes */}
      </Routes>
    </Router>
  );
}

export default App;
