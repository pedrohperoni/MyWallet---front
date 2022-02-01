import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import OutgoingTransaction from "./pages/OutgoingTransaction";
import IncomingTransaction from "./pages/IncomingTransaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/out-transaction" element={<OutgoingTransaction />} />
        <Route path="/in-transaction" element={<IncomingTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
