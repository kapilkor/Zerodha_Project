import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Auth pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Dashboard components
import Home from "./components/Home";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";

// Route protection
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [cookies] = useCookies(["token"]);

  return (
    <div className="App">
      <Routes>
        {/* Protected Dashboard Routes - All handled by Home component */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route 
          path="/login" 
          element={cookies.token ? <Navigate to="/" /> : <Login />} 
        />
        <Route 
          path="/signup" 
          element={cookies.token ? <Navigate to="/" /> : <Signup />} 
        />
      </Routes>
    </div>
  );
}

export default App;
