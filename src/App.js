import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Orderspage from "./components/Orderspage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {/* <Toolbar toggleSidebar={toggleSidebar} /> */}
      <Toolbar toggleSidebar={toggleSidebar} />
      <Orderspage />
      <Sidebar isOpen={isSidebarOpen} />
      {/* Add other components here */}
    </div>
  );
}

export default App;
