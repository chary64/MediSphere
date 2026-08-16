
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Analytics() {

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main-content">

        <div className="dashboard-container">

          {/* HEADER */}

          <div className="dashboard-header">

            <div>

              <h1>Analytics</h1>

              <p>
                AI model performance and healthcare risk analytics
              </p>

            </div>

            <button className="refresh-btn">
              <i className="bi bi-download me-2"></i>
              Export Analytics
            </button>

          </div>


          {/* STATISTICS */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon blue">
                <i className="bi bi-graph-up"></i>
              </div>

              <div>
                <p>Model Accuracy</p>
                <h2>91.6%</h2>
                <span>+2.4% this month</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon green">
                <i className="bi bi-bullseye"></i>
              </div>

              <div>
                <p>F1 Score</p>
                <h2>0.89</h2>
                <span>Strong performance</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon purple">
                <i className="bi bi-shield-check"></i>
              </div>

              <div>
                <p>AUC Score</p>
                <h2>0.94</h2>
                <span>Excellent discrimination</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <p>Predictions</p>
                <h2>18,642</h2>
                <span>This month</span>
              </div>

            </div>

          </div>


          {/* MODEL PERFORMANCE */}

          <div className="analytics-grid">

            <div className="main-card">

              <div className="card-header">

                <div>
                  <h2>Model Performance</h2>

                  <p>
                    DeepRisk-CVD v2.1
                  </p>
                </div>

                <span className="model-status production">
                  Production
                </span>

              </div>


              <div className="analytics-bars">

                <div className="analytics-bar">

                  <div>
                    <span>Accuracy</span>
                    <strong>91.6%</strong>
                  </div>

                  <div className="analytics-progress">
                    <div style={{ width: "91.6%" }}></div>
                  </div>

                </div>


                <div className="analytics-bar">

                  <div>
                    <span>Precision</span>
                    <strong>90.4%</strong>
                  </div>

                  <div className="analytics-progress">
                    <div style={{ width: "90.4%" }}></div>
                  </div>

                </div>


                <div className="analytics-bar">

                  <div>
                    <span>Recall</span>
                    <strong>88.7%</strong>
                  </div>

                  <div className="analytics-progress">
                    <div style={{ width: "88.7%" }}></div>
                  </div>

                </div>


                <div className="analytics-bar">

                  <div>
                    <span>F1 Score</span>
                    <strong>89%</strong>
                  </div>

                  <div className="analytics-progress">
                    <div style={{ width: "89%" }}></div>
                  </div>

                </div>

              </div>

            </div>


            {/* RISK DISTRIBUTION */}

            <div className="main-card">

              <div className="card-header">

                <div>
                  <h2>Risk Distribution</h2>

                  <p>
                    Current patient population
                  </p>
                </div>

              </div>


              <div className="risk-distribution">

                <div className="risk-distribution-item">

                  <div className="risk-dot low"></div>

                  <span>Low Risk</span>

                  <strong>218</strong>

                </div>


                <div className="risk-distribution-item">

                  <div className="risk-dot moderate"></div>

                  <span>Moderate Risk</span>

                  <strong>100</strong>

                </div>


                <div className="risk-distribution-item">

                  <div className="risk-dot high"></div>

                  <span>High Risk</span>

                  <strong>24</strong>

                </div>

              </div>


              <div className="risk-total">
                Total Patients
                <strong>342</strong>
              </div>

            </div>

          </div>


          {/* ANALYTICS METRICS */}

          <div className="main-card">

            <div className="card-header">

              <div>
                <h2>AI Prediction Insights</h2>

                <p>
                  Model explainability and prediction factors
                </p>
              </div>

            </div>


            <div className="insights-grid">

              <div className="insight-card">

                <i className="bi bi-heart-pulse"></i>

                <span>Top Risk Factor</span>

                <strong>Blood Pressure</strong>

                <small>
                  34.2% contribution
                </small>

              </div>


              <div className="insight-card">

                <i className="bi bi-droplet"></i>

                <span>Second Factor</span>

                <strong>Cholesterol</strong>

                <small>
                  21.8% contribution
                </small>

              </div>


              <div className="insight-card">

                <i className="bi bi-person-walking"></i>

                <span>Third Factor</span>

                <strong>BMI</strong>

                <small>
                  16.5% contribution
                </small>

              </div>


              <div className="insight-card">

                <i className="bi bi-calendar-heart"></i>

                <span>Age Impact</span>

                <strong>Moderate</strong>

                <small>
                  12.4% contribution
                </small>

              </div>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default Analytics;