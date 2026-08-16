import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Guidelines() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    );
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main-content">

        <div className="dashboard-container">

          {/* HEADER */}

          <div className="dashboard-header">

            <div>

              <h1>Clinical Guidelines</h1>

              <p>
                Clinical, safety and responsible AI guidelines
                for MediSphere healthcare systems.
              </p>

            </div>

            <button
              className="refresh-btn"
              onClick={() =>
                alert("Latest clinical guidelines are already displayed.")
              }
            >
              <i className="bi bi-journal-medical me-2"></i>
              View Latest Guidelines
            </button>

          </div>

          {/* COMPLIANCE CARDS */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon green">
                <i className="bi bi-shield-check"></i>
              </div>

              <div>
                <p>Clinical Compliance</p>
                <h2>98%</h2>
                <span>System compliance score</span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon blue">
                <i className="bi bi-lock"></i>
              </div>

              <div>
                <p>Data Privacy</p>
                <h2>100%</h2>
                <span>Privacy controls active</span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon purple">
                <i className="bi bi-lightbulb"></i>
              </div>

              <div>
                <p>Explainability</p>
                <h2>94%</h2>
                <span>Predictions explainable</span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-person-check"></i>
              </div>

              <div>
                <p>Human Oversight</p>
                <h2>Active</h2>
                <span>Clinical review enabled</span>
              </div>

            </div>

          </div>

          {/* IMPORTANT CLINICAL NOTICE */}

          <div className="clinical-banner">

            <div className="clinical-banner-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>

            <div>

              <h2>AI-Assisted Clinical Decision Support</h2>

              <p>
                MediSphere AI predictions are intended to support
                healthcare professionals and must not replace
                professional clinical judgment.
              </p>

            </div>

          </div>

          {/* GUIDELINES */}

          <div className="guidelines-grid">

            {/* 1 */}

            <div className="main-card guideline-card">

              <div className="guideline-icon blue">
                <i className="bi bi-shield-lock-fill"></i>
              </div>

              <h2>Patient Data Privacy</h2>

              <p>
                Patient information must remain protected throughout
                the AI and federated learning lifecycle.
              </p>

              <button
                className="guideline-expand"
                onClick={() => toggleSection(1)}
              >
                {openSection === 1
                  ? "Hide Guidelines"
                  : "View Guidelines"}

                <i
                  className={`bi ${
                    openSection === 1
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>

              </button>

              {openSection === 1 && (

                <ul className="expanded-guidelines">

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Encrypt patient information.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Use minimum required patient data.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Apply role-based access control.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Do not expose sensitive patient records.
                  </li>

                </ul>

              )}

            </div>

            {/* 2 */}

            <div className="main-card guideline-card">

              <div className="guideline-icon green">
                <i className="bi bi-graph-up"></i>
              </div>

              <h2>Clinical Model Validation</h2>

              <p>
                AI models must be tested and validated before
                being used for healthcare predictions.
              </p>

              <button
                className="guideline-expand"
                onClick={() => toggleSection(2)}
              >
                {openSection === 2
                  ? "Hide Guidelines"
                  : "View Guidelines"}

                <i
                  className={`bi ${
                    openSection === 2
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>

              </button>

              {openSection === 2 && (

                <ul className="expanded-guidelines">

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Validate accuracy and F1 score.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Perform prediction calibration.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Perform regular bias audits.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Monitor model performance continuously.
                  </li>

                </ul>

              )}

            </div>

            {/* 3 */}

            <div className="main-card guideline-card">

              <div className="guideline-icon purple">
                <i className="bi bi-lightbulb"></i>
              </div>

              <h2>Explainable AI</h2>

              <p>
                Healthcare professionals should understand the
                important factors behind an AI prediction.
              </p>

              <button
                className="guideline-expand"
                onClick={() => toggleSection(3)}
              >
                {openSection === 3
                  ? "Hide Guidelines"
                  : "View Guidelines"}

                <i
                  className={`bi ${
                    openSection === 3
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>

              </button>

              {openSection === 3 && (

                <ul className="expanded-guidelines">

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Display important patient risk factors.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Provide model confidence information.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Explain prediction results clearly.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Keep explanations understandable.
                  </li>

                </ul>

              )}

            </div>

            {/* 4 */}

            <div className="main-card guideline-card">

              <div className="guideline-icon orange">
                <i className="bi bi-person-check-fill"></i>
              </div>

              <h2>Human Clinical Oversight</h2>

              <p>
                AI predictions support healthcare professionals
                rather than replacing clinical decisions.
              </p>

              <button
                className="guideline-expand"
                onClick={() => toggleSection(4)}
              >
                {openSection === 4
                  ? "Hide Guidelines"
                  : "View Guidelines"}

                <i
                  className={`bi ${
                    openSection === 4
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>

              </button>

              {openSection === 4 && (

                <ul className="expanded-guidelines">

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Doctors review high-risk predictions.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    AI recommendations require clinical judgment.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Maintain decision accountability.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Record important clinical decisions.
                  </li>

                </ul>

              )}

            </div>

            {/* 5 */}

            <div className="main-card guideline-card">

              <div className="guideline-icon red">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h2>High-Risk Patient Handling</h2>

              <p>
                High-risk predictions require additional review
                by qualified healthcare professionals.
              </p>

              <button
                className="guideline-expand"
                onClick={() => toggleSection(5)}
              >
                {openSection === 5
                  ? "Hide Guidelines"
                  : "View Guidelines"}

                <i
                  className={`bi ${
                    openSection === 5
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>

              </button>

              {openSection === 5 && (

                <ul className="expanded-guidelines">

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Verify patient information.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Review medical history.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Consider additional clinical assessment.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Monitor patient risk over time.
                  </li>

                </ul>

              )}

            </div>

            {/* 6 */}

            <div className="main-card guideline-card">

              <div className="guideline-icon teal">
                <i className="bi bi-diagram-3"></i>
              </div>

              <h2>Federated Learning</h2>

              <p>
                Federated training should protect local patient
                information while improving the global AI model.
              </p>

              <button
                className="guideline-expand"
                onClick={() => toggleSection(6)}
              >
                {openSection === 6
                  ? "Hide Guidelines"
                  : "View Guidelines"}

                <i
                  className={`bi ${
                    openSection === 6
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>

              </button>

              {openSection === 6 && (

                <ul className="expanded-guidelines">

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Patient data remains at local hospitals.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Share model updates instead of raw records.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Monitor federated training rounds.
                  </li>

                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Allow only authorized nodes.
                  </li>

                </ul>

              )}

            </div>

          </div>

          {/* FINAL NOTICE */}

          <div className="guideline-notice">

            <i className="bi bi-exclamation-circle-fill"></i>

            <div>

              <strong>
                Important Clinical Notice
              </strong>

              <p>
                MediSphere AI predictions are decision-support
                information only. They are not a diagnosis or a
                substitute for professional medical advice. Final
                clinical decisions must always be made by qualified
                healthcare professionals.
              </p>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default Guidelines;