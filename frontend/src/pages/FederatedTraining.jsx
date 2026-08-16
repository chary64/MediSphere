
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function FederatedTraining() {

  const hospitals = [
    {
      name: "Apollo Hospital",
      location: "Hyderabad",
      patients: 86,
      status: "Connected",
      contribution: "18.4%"
    },
    {
      name: "KIMS Hospital",
      location: "Secunderabad",
      patients: 72,
      status: "Connected",
      contribution: "15.8%"
    },
    {
      name: "Yashoda Hospital",
      location: "Hyderabad",
      patients: 64,
      status: "Connected",
      contribution: "14.2%"
    },
    {
      name: "Care Hospital",
      location: "Banjara Hills",
      patients: 58,
      status: "Connected",
      contribution: "12.7%"
    }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main-content">

        <div className="dashboard-container">

          {/* HEADER */}

          <div className="dashboard-header">

            <div>
              <h1>Federated Training</h1>

              <p>
                Monitor distributed AI model training across healthcare nodes
              </p>
            </div>

            <button className="refresh-btn">
              <i className="bi bi-arrow-repeat me-2"></i>
              Refresh Training
            </button>

          </div>


          {/* STATISTICS */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon blue">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <div>
                <p>Training Round</p>
                <h2>47 / 70</h2>
                <span>Current training round</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon green">
                <i className="bi bi-hospital"></i>
              </div>

              <div>
                <p>Active Nodes</p>
                <h2>23</h2>
                <span>Hospitals connected</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon purple">
                <i className="bi bi-database"></i>
              </div>

              <div>
                <p>Training Samples</p>
                <h2>342K</h2>
                <span>Distributed records</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-speedometer2"></i>
              </div>

              <div>
                <p>Global Accuracy</p>
                <h2>91.6%</h2>
                <span>Current model accuracy</span>
              </div>

            </div>

          </div>


          {/* TRAINING PROGRESS */}

          <div className="main-card">

            <div className="card-header">

              <div>
                <h2>Training Progress</h2>

                <p>
                  Current federated learning cycle
                </p>
              </div>

              <span className="model-status production">
                ● Training Active
              </span>

            </div>


            <div className="training-progress">

              <div className="training-progress-header">

                <span>
                  Round 47 of 70
                </span>

                <strong>
                  67%
                </strong>

              </div>

              <div className="training-progress-bar">

                <div
                  style={{ width: "67%" }}
                ></div>

              </div>

            </div>


            <div className="training-metrics">

              <div>
                <span>Local Models</span>
                <strong>23 / 23</strong>
              </div>

              <div>
                <span>Aggregation</span>
                <strong>Completed</strong>
              </div>

              <div>
                <span>Privacy</span>
                <strong>Protected</strong>
              </div>

              <div>
                <span>Next Round</span>
                <strong>04:32 min</strong>
              </div>

            </div>

          </div>


          {/* HOSPITAL NODES */}

          <div className="main-card">

            <div className="card-header">

              <div>
                <h2>Federated Nodes</h2>

                <p>
                  Connected healthcare organizations
                </p>
              </div>

              <span className="node-count">
                23 Nodes
              </span>

            </div>


            <div className="federated-table-wrapper">

              <table className="patient-table">

                <thead>

                  <tr>
                    <th>Hospital</th>
                    <th>Location</th>
                    <th>Patients</th>
                    <th>Contribution</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {hospitals.map((hospital) => (

                    <tr key={hospital.name}>

                      <td>
                        <strong>{hospital.name}</strong>
                      </td>

                      <td>
                        {hospital.location}
                      </td>

                      <td>
                        {hospital.patients}
                      </td>

                      <td>
                        {hospital.contribution}
                      </td>

                      <td>

                        <span className="node-status">
                          <i className="bi bi-circle-fill"></i>
                          {hospital.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>


          {/* PRIVACY INFORMATION */}

          <div className="training-info-grid">

            <div className="main-card">

              <div className="training-info-icon">
                <i className="bi bi-shield-lock-fill"></i>
              </div>

              <h3>Privacy Preserved</h3>

              <p>
                Patient data remains inside individual hospitals.
                Only encrypted model updates are shared with the
                federated server.
              </p>

              <span className="secure-label">
                <i className="bi bi-check-circle-fill"></i>
                Secure Training
              </span>

            </div>


            <div className="main-card">

              <div className="training-info-icon">
                <i className="bi bi-diagram-3-fill"></i>
              </div>

              <h3>Distributed Learning</h3>

              <p>
                Each healthcare node trains the model locally.
                The global model is created by securely aggregating
                local model updates.
              </p>

              <span className="secure-label">
                <i className="bi bi-check-circle-fill"></i>
                Federated Architecture
              </span>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default FederatedTraining;