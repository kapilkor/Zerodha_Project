// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);

//   useEffect(() => {
//     const verifyUser = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:3002/verify", {
//           withCredentials: true,
//         });
//         setIsAuthenticated(data.status === true);
//       } catch (error) {
//         setIsAuthenticated(false);
//       }
//     };
//     verifyUser();
//   }, []);

//   if (isAuthenticated === null)
//     return <div>Checking authentication...</div>;

//   if (!isAuthenticated) return <Navigate to="/login" />;

//   return children;
// };

// export default ProtectedRoute;

// src/components/ProtectedRoute.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/verify", { withCredentials: true })
      .then((res) => setAuthenticated(res.data.status === true))
      .catch(() => setAuthenticated(false));
  }, []);

  if (authenticated === null) return <div>Checking authentication...</div>;
  if (!authenticated) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;

