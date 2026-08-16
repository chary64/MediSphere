
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main-content">
        <div className="page-container">

          {/* ================= HEADER ================= */}

          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>
              <h1 className="page-title mb-1">
                AI Risk Prediction Engine
              </h1>

              <p className="page-subtitle mb-0">
                Federated learning powered healthcare risk analysis
              </p>
            </div>

            <button className="btn-primary-custom">
              <i className="bi bi-arrow-clockwise me-2"></i>
              Refresh
            </button>

          </div>


          {/* ================= STAT CARDS ================= */}

          <div className="row g-4">

            {/* Patients */}

            <div className="col-xl-3 col-md-6">

              <div className="stat-card">

                <div className="d-flex justify-content-between">

                  <div>
                    <div className="stat-title">
                      Total Patients
                    </div>

                    <div className="stat-value">
                      342
                    </div>

                    <div className="stat-info">
                      <i className="bi bi-arrow-up"></i> 12% this month
                    </div>
                  </div>

                  <div className="fs-1 text-primary">
                    <i className="bi bi-people"></i>
                  </div>

                </div>

              </div>

            </div>


            {/* Accuracy */}

            <div className="col-xl-3 col-md-6">

              <div className="stat-card">

                <div className="d-flex justify-content-between">

                  <div>

                    <div className="stat-title">
                      Model Accuracy
                    </div>

                    <div className="stat-value">
                      91.6%
                    </div>

                    <div className="stat-info">
                      Cross-validation score
                    </div>

                  </div>

                  <div className="fs-1 text-success">
                    <i className="bi bi-bullseye"></i>
                  </div>

                </div>

              </div>

            </div>


            {/* Hospitals */}

            <div className="col-xl-3 col-md-6">

              <div className="stat-card">

                <div className="d-flex justify-content-between">

                  <div>

                    <div className="stat-title">
                      Active Hospitals
                    </div>

                    <div className="stat-value">
                      23
                    </div>

                    <div className="stat-info">
                      Federated nodes connected
                    </div>

                  </div>

                  <div className="fs-1 text-info">
                    <i className="bi bi-hospital"></i>
                  </div>

                </div>

              </div>

            </div>


            {/* Training */}

            <div className="col-xl-3 col-md-6">

              <div className="stat-card">

                <div className="d-flex justify-content-between">

                  <div>

                    <div className="stat-title">
                      Training Round
                    </div>

                    <div className="stat-value">
                      47
                    </div>

                    <div className="stat-info">
                      Out of 70 rounds
                    </div>

                  </div>

                  <div className="fs-1 text-warning">
                    <i className="bi bi-cpu"></i>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= RISK PREDICTION ================= */}

          <div className="content-card">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <div>

                <h2 className="mb-1">
                  Cardiovascular Risk Prediction
                </h2>

                <p className="text-secondary mb-0">
                  TensorFlow Federated model analysis
                </p>

              </div>

              <span className="badge bg-success px-3 py-2">
                Model Active
              </span>

            </div>


            <div className="row g-4">

              {/* Patient Information */}

              <div className="col-lg-4">

                <div className="risk-panel">

                  <h5 className="mb-4">
                    <i className="bi bi-person-heart me-2"></i>
                    Patient Information
                  </h5>

                  <div className="info-row">
                    <span>Patient ID</span>
                    <strong>PAT-1024</strong>
                  </div>

                  <div className="info-row">
                    <span>Age</span>
                    <strong>52 years</strong>
                  </div>

                  <div className="info-row">
                    <span>BMI</span>
                    <strong>27.4</strong>
                  </div>

                  <div className="info-row">
                    <span>Blood Pressure</span>
                    <strong>138 / 86</strong>
                  </div>

                  <div className="info-row">
                    <span>Cholesterol</span>
                    <strong>218 mg/dL</strong>
                  </div>

                  <div className="info-row">
                    <span>Glucose</span>
                    <strong>108 mg/dL</strong>
                  </div>

                </div>

              </div>


              {/* Prediction */}

              <div className="col-lg-4">

                <div className="risk-panel text-center">

                  <h5 className="mb-4">
                    Predicted Risk
                  </h5>

                  <div className="risk-circle">

                    <span>
                      23.4%
                    </span>

                  </div>

                  <h4 className="risk-moderate mt-4">
                    Moderate Risk
                  </h4>

                  <p className="text-secondary">
                    Cardiovascular disease probability
                  </p>

                  <button className="btn-primary-custom mt-2">
                    <i className="bi bi-activity me-2"></i>
                    Run Prediction
                  </button>

                </div>

              </div>


              {/* SHAP */}

              <div className="col-lg-4">

                <div className="risk-panel">

                  <h5 className="mb-4">
                    <i className="bi bi-bar-chart-line me-2"></i>
                    SHAP Explanation
                  </h5>

                  <div className="shap-item">

                    <div className="d-flex justify-content-between">

                      <span>Systolic BP</span>

                      <strong className="text-danger">
                        +0.31
                      </strong>

                    </div>

                    <div className="progress-custom mt-2">

                      <div
                        className="progress-value"
                        style={{ width: "82%" }}
                      ></div>

                    </div>

                  </div>


                  <div className="shap-item mt-4">

                    <div className="d-flex justify-content-between">

                      <span>LDL Cholesterol</span>

                      <strong className="text-danger">
                        +0.24
                      </strong>

                    </div>

                    <div className="progress-custom mt-2">

                      <div
                        className="progress-value"
                        style={{ width: "65%" }}
                      ></div>

                    </div>

                  </div>


                  <div className="shap-item mt-4">

                    <div className="d-flex justify-content-between">

                      <span>Age</span>

                      <strong className="text-warning">
                        +0.18
                      </strong>

                    </div>

                    <div className="progress-custom mt-2">

                      <div
                        className="progress-value"
                        style={{ width: "48%" }}
                      ></div>

                    </div>

                  </div>


                  <div className="shap-item mt-4">

                    <div className="d-flex justify-content-between">

                      <span>BMI</span>

                      <strong className="text-success">
                        -0.08
                      </strong>

                    </div>

                    <div className="progress-custom mt-2">

                      <div
                        className="progress-value"
                        style={{ width: "25%" }}
                      ></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= MODEL STATUS ================= */}

          <div className="row g-4 mt-1">

            {/* Federated Learning */}

            <div className="col-lg-6">

              <div className="content-card h-100">

                <h2>
                  <i className="bi bi-diagram-3 me-2 text-primary"></i>
                  Federated Learning
                </h2>

                <p className="text-secondary">
                  Training the global model across multiple hospitals
                  without transferring raw patient data.
                </p>

                <div className="mt-4">

                  <div className="d-flex justify-content-between mb-2">

                    <span>
                      Training Progress
                    </span>

                    <strong>
                      67%
                    </strong>

                  </div>

                  <div className="progress-custom">

                    <div
                      className="progress-value"
                      style={{ width: "67%" }}
                    ></div>

                  </div>

                </div>

                <div className="row mt-4">

                  <div className="col-6">

                    <small className="text-secondary">
                      Connected Nodes
                    </small>

                    <h4>
                      23 / 25
                    </h4>

                  </div>

                  <div className="col-6">

                    <small className="text-secondary">
                      Current Round
                    </small>

                    <h4>
                      47 / 70
                    </h4>

                  </div>

                </div>

              </div>

            </div>


            {/* Model Version */}

            <div className="col-lg-6">

              <div className="content-card h-100">

                <h2>
                  <i className="bi bi-cpu me-2 text-info"></i>
                  Active Model
                </h2>

                <div className="model-version">

                  <div>

                    <small className="text-secondary">
                      Model Version
                    </small>

                    <h3>
                      DeepRisk-CVD v2.1
                    </h3>

                  </div>

                  <span className="badge bg-success">
                    Production
                  </span>

                </div>

                <hr />

                <div className="row">

                  <div className="col-6">

                    <small className="text-secondary">
                      Accuracy
                    </small>

                    <h4>
                      91.6%
                    </h4>

                  </div>

                  <div className="col-6">

                    <small className="text-secondary">
                      F1 Score
                    </small>

                    <h4>
                      0.89
                    </h4>

                  </div>

                  <div className="col-6 mt-3">

                    <small className="text-secondary">
                      Last Updated
                    </small>

                    <h6>
                      Aug 12, 2026
                    </h6>

                  </div>

                  <div className="col-6 mt-3">

                    <small className="text-secondary">
                      Framework
                    </small>

                    <h6>
                      TensorFlow Federated
                    </h6>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= VALIDATION ================= */}

          <div className="content-card">

            <div className="d-flex justify-content-between align-items-center">

              <div>

                <h2>
                  Validation Status
                </h2>

                <p className="text-secondary mb-0">
                  Your team's Milestone 2 validation modules
                </p>

              </div>

              <span className="badge bg-info">
                3 Modules
              </span>

            </div>


            <div className="row g-3 mt-3">

              <div className="col-md-4">

                <a
                  href="/validation/calibration"
                  className="validation-card"
                >

                  <i className="bi bi-graph-up"></i>

                  <div>
                    <h6>Prediction Calibration</h6>
                    <small>
                      Model calibration analysis
                    </small>
                  </div>

                </a>

              </div>


              <div className="col-md-4">

                <a
                  href="/validation/bias-audit"
                  className="validation-card"
                >

                  <i className="bi bi-shield-check"></i>

                  <div>
                    <h6>Bias Audit</h6>
                    <small>
                      Demographic fairness analysis
                    </small>
                  </div>

                </a>

              </div>


              <div className="col-md-4">

                <a
                  href="/validation/clinical-guidelines"
                  className="validation-card"
                >

                  <i className="bi bi-clipboard2-check"></i>

                  <div>
                    <h6>Clinical Guidelines</h6>
                    <small>
                      Clinical compliance validation
                    </small>
                  </div>

                </a>

              </div>

            </div>

          </div>


          {/* ================= FOOTER ================= */}

          <footer className="dashboard-footer">

            MediSphere Healthcare Management Platform

            <span> • </span>

            Milestone 2: Federated Learning & Risk Models

          </footer>

        </div>

      </main>
    </>
  );
};

export default Dashboard;