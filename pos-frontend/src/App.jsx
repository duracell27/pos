
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth, Home, Menu, Orders, Tables } from "./pages";
import Header from "./componets/shared/Header";



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/*" element={<div>Не знайдено</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
