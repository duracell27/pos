import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Auth, Home, Menu, Orders, Tables } from "./pages";
import Header from "./componets/shared/Header";
import { useSelector } from "react-redux";
import propTypes from "prop-types";
import useLoadData from "./hooks/useLoadData";
import FullScreenLoader from "./componets/shared/FullScreenLoader";

function Layout() {
  const location = useLocation();
  const isLoading = useLoadData();
  const hideHeaderRoutes = ["/auth"];
  const { isAuth } = useSelector((state) => state.user);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <>
      {hideHeaderRoutes.includes(location.pathname) ? null : <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tables"
          element={
            <ProtectedRoutes>
              <Tables />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoutes>
              <Menu />
            </ProtectedRoutes>
          }
        />
        <Route path="/*" element={<div>Не знайдено</div>} />
      </Routes>
    </>
  );
}

const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

ProtectedRoutes.propTypes = {
  children: propTypes.node.isRequired,
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
