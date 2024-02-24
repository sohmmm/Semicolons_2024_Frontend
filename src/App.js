import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import AppProvider from "./context/AppContext";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
