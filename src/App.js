import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './Dashboard';
import SettingsPage from './Settings';
import TaskModal from "./TaskModal";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/index.html" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/task-modal" element={<TaskModal />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
