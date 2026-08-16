
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Models from "./pages/Models";
import FederatedTraining from "./pages/FederatedTraining";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Calibration from "./pages/Calibration";
import BiasAudit from "./pages/BiasAudit";
import Guidelines from "./pages/Guidelines";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Open Dashboard by default */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Any unknown page */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route
          path="/patients"
          element={<Patients />}
        />

        <Route
          path="/models"
          element={<Models />}
        />

        <Route
  path="/federated-training"
  element={<FederatedTraining />}
/>

<Route
  path="/analytics"
  element={<Analytics />}
/>

<Route
  path="/reports"
  element={<Reports />}
/>
 {/* Validation Pages */}
        <Route
          path="/validation/calibration"
          element={<Calibration />}
        />

        <Route
          path="/validation/bias-audit"
          element={<BiasAudit />}
        />

        <Route
          path="/validation/clinical-guidelines"
          element={<Guidelines />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;