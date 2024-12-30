import React, { useState } from 'react';
import { Router } from 'react-router';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 h-screen w-64 transition-transform dark:bg-white text-gray border-r-2 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Monitoring Dashboard</h2>
              <button
                className="sm:hidden text-white"
                onClick={ToggleSidebar}
                aria-label="Close Sidebar"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-2 font-medium flex-grow">
              <li>
              <ChartLink />
              </li>
              <li>
                <TableLink />
              </li>
              <li className="flex justify-center mt-auto">
                <LogoutButton />
              </li>
            </ul>
          </div>
        </aside>

        <div
          className={`z-0 flex-1 transition-all ${
            isOpen ? "ml-64" : "ml-0"
          } sm:ml-64`}
        >
          <div className="custom-bg1 text-white p-4 flex justify-between items-center h-16">
            <button
              className="sm:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              ☰
            </button>
            <h1 className="text-lg"></h1>
          </div>

          <div className="pt-2 z-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/table" element={<Table />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;