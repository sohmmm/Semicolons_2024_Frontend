import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./pages/PageNotFound";
import AppProvider from "./context/AppContext";
import Dashboard from "./components/Dashboard/Dashboard";
import Purchase from "./components/Inventory/Purchase";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
