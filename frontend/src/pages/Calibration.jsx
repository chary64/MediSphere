import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Calibration() {
  const [running, setRunning] = useState(false);

  const runCalibration = () => {
    setRunning(true);

    setTimeout(() => {
      setRunning(false);
      alert("Calibration analysis completed successfully.");
    }, 1500);
  };

  const calibrationResults = [
    {
      group: "Low Risk",
      predicted: "12.4%",
      observed: "11.8%",
      difference: "0.6%",
      patients: 6240,
      status: "Good",
    },
    {
      group: "Moderate Risk",
      predicted: "42.7%",
      observed: "43.5%",
      difference: "0.8%",
      patients: 7156,
      status: "Good",
    },
    {
      group: "High Risk",
      predicted: "76.2%",
      observed: "74.9%",
      difference: "1.3%",
      patients: 5246,
      status: "Review",
    },
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
              <h1>Prediction Calibration</h1>

              <p>
                Evaluate how accurately predicted cardiovascular risk
                probabilities match observed patient outcomes.
              </p>
            </div>

            <button
              className="refresh-btn"
              onClick={runCalibration}
              disabled={running}
            >
              <i
                className={`bi ${
                  running
                    ? "bi-hourglass-split"
                    : "bi-arrow-repeat"
                } me-2`}
              ></i>

              {running ? "Running..." : "Run Calibration"}
            </button>
          </div>

          {/* STATISTICS */}
          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon blue">
                <i className="bi bi-bullseye"></i>
              </div>

              <div>
                <p>Calibration Score</p>
                <h2>0.94</h2>
                <span>Excellent calibration</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <i className="bi bi-check-circle"></i>
              </div>

              <div>
                <p>Reliability</p>
                <h2>92.8%</h2>
                <span>Prediction reliability</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon purple">
                <i className="bi bi-graph-down"></i>
              </div>

              <div>
                <p>Brier Score</p>
                <h2>0.082</h2>
                <span>Lower is better</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">
                <i className="bi bi-database-check"></i>
              </div>

              <div>
                <p>Samples Tested</p>
                <h2>18,642</h2>
                <span>Validation samples</span>
              </div>
            </div>

          </div>

          {/* MODEL INFORMATION */}
          <div className="main-card">

            <div className="card-header">
              <div>
                <h2>Model Calibration Status</h2>

                <p>
                  Current calibration information for DeepRisk-CVD
                </p>
              </div>

              <span className="model-status production">
                ● Validated
              </span>
            </div>

            <div className="model-info-grid">

              <div>
                <span>Model Version</span>
                <strong>DeepRisk-CVD v2.1</strong>
              </div>

              <div>
                <span>Training Round</span>
                <strong>47 / 70</strong>
              </div>

              <div>
                <span>Calibration Method</span>
                <strong>Platt Scaling</strong>
              </div>

              <div>
                <span>Last Calibration</span>
                <strong>15 Aug 2026</strong>
              </div>

            </div>

          </div>

          {/* CALIBRATION CURVE */}
          <div className="main-card">

            <div className="card-header">
              <div>
                <h2>Calibration Performance</h2>

                <p>
                  Predicted cardiovascular risk compared with observed
                  outcomes.
                </p>
              </div>
            </div>

            <div className="calibration-chart">

              <div className="chart-y-label">
                Observed Risk
              </div>

              <div className="calibration-area">

                <div className="diagonal-line"></div>

                <div className="calibration-point p1"></div>
                <div className="calibration-point p2"></div>
                <div className="calibration-point p3"></div>
                <div className="calibration-point p4"></div>
                <div className="calibration-point p5"></div>

                <div className="chart-x-label">
                  Predicted Risk
                </div>

              </div>

            </div>

            <div className="calibration-legend">

              <span>
                <i className="legend-dot expected"></i>
                Perfect Calibration
              </span>

              <span>
                <i className="legend-dot actual"></i>
                Model Prediction
              </span>

            </div>

          </div>

          {/* RISK DISTRIBUTION */}
          <div className="main-card">

            <div className="card-header">
              <div>
                <h2>Risk Distribution</h2>

                <p>
                  Patient distribution across prediction categories.
                </p>
              </div>
            </div>

            <div className="risk-distribution">

              <div className="risk-row">
                <div className="risk-title">
                  <span>Low Risk</span>
                  <strong>33.5%</strong>
                </div>

                <div className="risk-progress">
                  <div
                    className="risk-low"
                    style={{ width: "33.5%" }}
                  ></div>
                </div>

                <small>6,240 patients</small>
              </div>

              <div className="risk-row">
                <div className="risk-title">
                  <span>Moderate Risk</span>
                  <strong>38.4%</strong>
                </div>

                <div className="risk-progress">
                  <div
                    className="risk-medium"
                    style={{ width: "38.4%" }}
                  ></div>
                </div>

                <small>7,156 patients</small>
              </div>

              <div className="risk-row">
                <div className="risk-title">
                  <span>High Risk</span>
                  <strong>28.1%</strong>
                </div>

                <div className="risk-progress">
                  <div
                    className="risk-high"
                    style={{ width: "28.1%" }}
                  ></div>
                </div>

                <small>5,246 patients</small>
              </div>

            </div>

          </div>

          {/* RESULTS TABLE */}
          <div className="main-card">

            <div className="card-header">
              <div>
                <h2>Calibration Results</h2>

                <p>
                  Risk probability validation by patient group.
                </p>
              </div>
            </div>

            <div className="validation-table-wrapper">

              <table className="patient-table">

                <thead>
                  <tr>
                    <th>Risk Group</th>
                    <th>Patients</th>
                    <th>Predicted Risk</th>
                    <th>Observed Risk</th>
                    <th>Difference</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {calibrationResults.map((item, index) => (
                    <tr key={index}>

                      <td>{item.group}</td>

                      <td>
                        {item.patients.toLocaleString()}
                      </td>

                      <td>{item.predicted}</td>

                      <td>{item.observed}</td>

                      <td>{item.difference}</td>

                      <td>
                        {item.status === "Good" ? (
                          <span className="validation-success">
                            ● Good
                          </span>
                        ) : (
                          <span className="validation-warning">
                            ● Review
                          </span>
                        )}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* INTERPRETATION */}
          <div className="audit-alert">

            <div className="audit-alert-icon">
              <i className="bi bi-info-circle"></i>
            </div>

            <div>

              <h3>Calibration Interpretation</h3>

              <p>
                The model is currently well calibrated with a score of
                0.94. Predicted probabilities closely match observed
                outcomes. The high-risk group has a 1.3% difference and
                should be monitored during the next federated training
                round.
              </p>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}

export default Calibration;