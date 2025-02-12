
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth, Home, Orders } from "./pages";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
