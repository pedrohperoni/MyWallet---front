import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import OutgoingTransaction from "./pages/OutgoingTransaction";
import IncomingTransaction from "./pages/IncomingTransaction";
import { useState } from "react";
import TokenContext from "./contexts/tokenContext";

function App() {
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/out-transaction" element={<OutgoingTransaction />} />
          <Route path="/in-transaction" element={<IncomingTransaction />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
