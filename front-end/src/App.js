import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Meetings from "./components/Meetings";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  if (isUserLoggedIn) {
    return (
      <div className="App">
        <Navbar setLogoutUser={setIsUserLoggedIn} />
        <Routes>
          <Route path="/" caseSensitive={false} element={<Dashboard />} />
          <Route
            path="/Meetings"
            caseSensitive={false}
            element={<Meetings />}
          />
        </Routes>
      </div>
    );
  } else {
    return (
      <main className="App">
        <LogIn setLoginUser={setIsUserLoggedIn} />
      </main>
    );
  }
}

export default App;
