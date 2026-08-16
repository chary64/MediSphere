import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Patients() {
  const patients = [
    {
      id: "PAT-1024",
      name: "John Smith",
      age: 52,
      gender: "Male",
      risk: "Moderate",
      status: "Active",
    },
    {
      id: "PAT-1025",
      name: "Sarah Johnson",
      age: 46,
      gender: "Female",
      risk: "Low",
      status: "Active",
    },
    {
      id: "PAT-1026",
      name: "Robert Wilson",
      age: 61,
      gender: "Male",
      risk: "High",
      status: "Monitoring",
    },
    {
      id: "PAT-1027",
      name: "Emily Davis",
      age: 39,
      gender: "Female",
      risk: "Low",
      status: "Active",
    },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main-content">
        <div className="dashboard-container">

          <div className="dashboard-header">
            <div>
              <h1>Patients</h1>
              <p>Manage and monitor patient risk information</p>
            </div>

            <button className="add-patient-btn">
  <i className="bi bi-person-plus-fill"></i>
  <span>Add Patient</span>
</button>
          </div>

          {/* Patient Statistics */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon blue">
                <i className="bi bi-people-fill"></i>
              </div>

              <div>
                <p>Total Patients</p>
                <h2>342</h2>
                <span>Registered patients</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <i className="bi bi-person-check"></i>
              </div>

              <div>
                <p>Active</p>
                <h2>318</h2>
                <span>Currently active</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">
                <i className="bi bi-exclamation-triangle"></i>
              </div>

              <div>
                <p>High Risk</p>
                <h2>24</h2>
                <span>Need monitoring</span>
              </div>
            </div>

          </div>

          {/* Patient Table */}

          <div className="main-card">

            <div className="card-header">
              <div>
                <h2>Patient Records</h2>
                <p>Patient information and current risk status</p>
              </div>

              <button className="refresh-btn">
                <i className="bi bi-search me-2"></i>
                Search
              </button>
            </div>

            <div className="table-responsive">

              <table className="patient-table">

                <thead>
                  <tr>
                    <th>Patient ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Risk Level</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {patients.map((patient) => (
                    <tr key={patient.id}>

                      <td>
                        <strong>{patient.id}</strong>
                      </td>

                      <td>{patient.name}</td>

                      <td>{patient.age}</td>

                      <td>{patient.gender}</td>

                      <td>
                        <span
                          className={
                            patient.risk === "High"
                              ? "risk-badge high"
                              : patient.risk === "Moderate"
                              ? "risk-badge moderate"
                              : "risk-badge low"
                          }
                        >
                          {patient.risk}
                        </span>
                      </td>

                      <td>
                        <span className="patient-status">
                          {patient.status}
                        </span>
                      </td>

                      <td>
                        <button className="view-btn">
                          View
                        </button>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}

export default Patients;