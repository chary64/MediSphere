
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "bi-speedometer2"
    },
    {
      name: "Patients",
      path: "/patients",
      icon: "bi-people"
    },
    {
      name: "Models",
      path: "/models",
      icon: "bi-cpu"
    },
    {
      name: "Federated Training",
      path: "/federated-training",
      icon: "bi-diagram-3"
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: "bi-bar-chart"
    },
    {
      name: "Reports",
      path: "/reports",
      icon: "bi-file-earmark-text"
    }
    
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-menu">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >

            <i className={`bi ${item.icon}`}></i>

            <span>{item.name}</span>

          </NavLink>

        ))}

      </div>


      {/* Validation Section */}

      <div className="sidebar-section">

        <div className="sidebar-heading">
          Validation
        </div>

        <NavLink
          to="/validation/calibration"
          className="sidebar-link"
        >
          <i className="bi bi-graph-up"></i>
          <span>Prediction Calibration</span>
        </NavLink>

        <NavLink
          to="/validation/bias-audit"
          className="sidebar-link"
        >
          <i className="bi bi-shield-check"></i>
          <span>Bias Audit</span>
        </NavLink>

        <NavLink
          to="/validation/clinical-guidelines"
          className="sidebar-link"
        >
          <i className="bi bi-clipboard2-check"></i>
          <span>Clinical Guidelines</span>
        </NavLink>

      </div>

    </aside>
  );
};

export default Sidebar;