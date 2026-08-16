import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function BiasAudit() {
  const [running, setRunning] = useState(false);

  const runAudit = () => {
    setRunning(true);

    setTimeout(() => {
      setRunning(false);
      alert("Bias audit completed successfully.");
    }, 1500);
  };

  const groups = [
    {
      group: "Male",
      patients: 182,
      accuracy: "92.4%",
      fpr: "6.2%",
      fnr: "5.4%",
      fairness: "96.4%",
      status: "Fair",
    },
    {
      group: "Female",
      patients: 160,
      accuracy: "90.8%",
      fpr: "6.7%",
      fnr: "5.8%",
      fairness: "95.7%",
      status: "Fair",
    },
    {
      group: "Age 18-40",
      patients: 94,
      accuracy: "91.9%",
      fpr: "5.9%",
      fnr: "5.2%",
      fairness: "94.8%",
      status: "Fair",
    },
    {
      group: "Age 41-60",
      patients: 151,
      accuracy: "92.2%",
      fpr: "6.4%",
      fnr: "5.5%",
      fairness: "95.2%",
      status: "Fair",
    },
    {
      group: "Age 60+",
      patients: 97,
      accuracy: "89.7%",
      fpr: "8.1%",
      fnr: "7.2%",
      fairness: "88.9%",
      status: "Monitor",
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
              <h1>Bias Audit</h1>

              <p>
                Monitor fairness and identify potential demographic
                bias in the cardiovascular risk prediction model.
              </p>
            </div>

            <button
              className="refresh-btn"
              onClick={runAudit}
              disabled={running}
            >
              <i
                className={`bi ${
                  running
                    ? "bi-hourglass-split"
                    : "bi-shield-check"
                } me-2`}
              ></i>

              {running ? "Auditing..." : "Run Bias Audit"}
            </button>

          </div>

          {/* STATISTICS */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon green">
                <i className="bi bi-shield-check"></i>
              </div>

              <div>
                <p>Fairness Score</p>
                <h2>94.2%</h2>
                <span>Within acceptable range</span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon blue">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <p>Groups Audited</p>
                <h2>6</h2>
                <span>Demographic groups</span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon purple">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <div>
                <p>Equal Opportunity</p>
                <h2>91.8%</h2>
                <span>Fair prediction rate</span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-exclamation-triangle"></i>
              </div>

              <div>
                <p>Issues Found</p>
                <h2>1</h2>
                <span>Requires monitoring</span>
              </div>

            </div>

          </div>

          {/* MODEL FAIRNESS */}

          <div className="main-card">

            <div className="card-header">

              <div>
                <h2>Fairness Audit Summary</h2>

                <p>
                  Current fairness evaluation of DeepRisk-CVD v2.1
                </p>
              </div>

              <span className="audit-approved">
                <i className="bi bi-check-circle-fill"></i>
                Audit Passed
              </span>

            </div>

            <div className="bias-metrics">

              <div className="bias-item">

                <div className="bias-header">
                  <span>Gender Fairness</span>
                  <strong>96.4%</strong>
                </div>

                <div className="bias-progress">
                  <div style={{ width: "96.4%" }}></div>
                </div>

              </div>

              <div className="bias-item">

                <div className="bias-header">
                  <span>Age Fairness</span>
                  <strong>92.1%</strong>
                </div>

                <div className="bias-progress">
                  <div style={{ width: "92.1%" }}></div>
                </div>

              </div>

              <div className="bias-item">

                <div className="bias-header">
                  <span>Regional Fairness</span>
                  <strong>94.8%</strong>
                </div>

                <div className="bias-progress">
                  <div style={{ width: "94.8%" }}></div>
                </div>

              </div>

              <div className="bias-item">

                <div className="bias-header">
                  <span>Overall Fairness</span>
                  <strong>94.2%</strong>
                </div>

                <div className="bias-progress">
                  <div style={{ width: "94.2%" }}></div>
                </div>

              </div>

            </div>

          </div>

          {/* FAIRNESS METRICS */}

          <div className="main-card">

            <div className="card-header">

              <div>
                <h2>Fairness Metrics</h2>

                <p>
                  Key measurements used to evaluate model fairness.
                </p>
              </div>

            </div>

            <div className="fairness-metric-grid">

              <div className="fairness-box">
                <i className="bi bi-bar-chart"></i>
                <h3>Demographic Parity</h3>
                <strong>95.1%</strong>
                <p>Prediction rate consistency</p>
              </div>

              <div className="fairness-box">
                <i className="bi bi-check2-all"></i>
                <h3>Equal Opportunity</h3>
                <strong>91.8%</strong>
                <p>True positive consistency</p>
              </div>

              <div className="fairness-box">
                <i className="bi bi-shuffle"></i>
                <h3>Equalized Odds</h3>
                <strong>93.2%</strong>
                <p>Error rate consistency</p>
              </div>

              <div className="fairness-box">
                <i className="bi bi-scale"></i>
                <h3>Disparate Impact</h3>
                <strong>0.94</strong>
                <p>Acceptable fairness ratio</p>
              </div>

            </div>

          </div>

          {/* DEMOGRAPHIC TABLE */}

          <div className="main-card">

            <div className="card-header">

              <div>
                <h2>Demographic Audit</h2>

                <p>
                  Comparison of model performance across patient groups.
                </p>
              </div>

            </div>

            <div className="validation-table-wrapper">

              <table className="patient-table">

                <thead>

                  <tr>
                    <th>Group</th>
                    <th>Patients</th>
                    <th>Accuracy</th>
                    <th>False Positive</th>
                    <th>False Negative</th>
                    <th>Fairness</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {groups.map((item, index) => (

                    <tr key={index}>

                      <td>{item.group}</td>

                      <td>{item.patients}</td>

                      <td>{item.accuracy}</td>

                      <td>{item.fpr}</td>

                      <td>{item.fnr}</td>

                      <td>{item.fairness}</td>

                      <td>

                        {item.status === "Fair" ? (

                          <span className="validation-success">
                            ● Fair
                          </span>

                        ) : (

                          <span className="validation-warning">
                            ● Monitor
                          </span>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* RECOMMENDATION */}

          <div className="audit-alert">

            <div className="audit-alert-icon">
              <i className="bi bi-info-circle"></i>
            </div>

            <div>

              <h3>Audit Recommendation</h3>

              <p>
                The current model meets the defined fairness threshold.
                However, the Age 60+ group has a higher false-positive
                rate of 8.1%. Continue monitoring this group during
                future federated training rounds.
              </p>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}

export default BiasAudit;