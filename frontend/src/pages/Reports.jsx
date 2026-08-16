
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Reports() {

  const reports = [
    {
      name: "Monthly Risk Prediction Report",
      type: "Risk Analysis",
      date: "15 Aug 2026",
      status: "Ready"
    },
    {
      name: "Federated Training Report",
      type: "Training",
      date: "14 Aug 2026",
      status: "Ready"
    },
    {
      name: "Model Performance Report",
      type: "AI Model",
      date: "12 Aug 2026",
      status: "Ready"
    },
    {
      name: "Bias & Fairness Audit",
      type: "Validation",
      date: "10 Aug 2026",
      status: "Ready"
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

              <h1>Reports</h1>

              <p>
                Healthcare AI reports, validation results and analytics
              </p>

            </div>

            <button className="refresh-btn">
              <i className="bi bi-file-earmark-plus me-2"></i>
              Generate Report
            </button>

          </div>


          {/* REPORT STATISTICS */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon blue">
                <i className="bi bi-file-earmark-text"></i>
              </div>

              <div>
                <p>Total Reports</p>
                <h2>48</h2>
                <span>Generated reports</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon green">
                <i className="bi bi-check-circle"></i>
              </div>

              <div>
                <p>Completed</p>
                <h2>44</h2>
                <span>Available reports</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-clock"></i>
              </div>

              <div>
                <p>Processing</p>
                <h2>04</h2>
                <span>Reports being generated</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon purple">
                <i className="bi bi-calendar3"></i>
              </div>

              <div>
                <p>This Month</p>
                <h2>12</h2>
                <span>Reports generated</span>
              </div>

            </div>

          </div>


          {/* REPORT LIST */}

          <div className="main-card">

            <div className="card-header">

              <div>

                <h2>Generated Reports</h2>

                <p>
                  Download and review system reports
                </p>

              </div>

              <button className="refresh-btn">
                <i className="bi bi-funnel me-2"></i>
                Filter
              </button>

            </div>


            <div className="reports-list">

              {reports.map((report, index) => (

                <div
                  className="report-row"
                  key={index}
                >

                  <div className="report-icon">

                    <i className="bi bi-file-earmark-bar-graph"></i>

                  </div>


                  <div className="report-details">

                    <h3>
                      {report.name}
                    </h3>

                    <div>

                      <span>
                        {report.type}
                      </span>

                      <span>
                        {report.date}
                      </span>

                    </div>

                  </div>


                  <span className="report-status">
                    <i className="bi bi-check-circle-fill"></i>
                    {report.status}
                  </span>


                  <button className="report-download">

                    <i className="bi bi-download"></i>

                    Download

                  </button>

                </div>

              ))}

            </div>

          </div>


          {/* REPORT CATEGORIES */}

          <div className="report-category-grid">

            <div className="main-card report-category">

              <div className="report-category-icon blue">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <h3>Risk Analysis</h3>

              <p>
                Patient cardiovascular risk predictions,
                trends and model insights.
              </p>

              <button className="category-btn">
                Generate Report
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>


            <div className="main-card report-category">

              <div className="report-category-icon green">
                <i className="bi bi-diagram-3"></i>
              </div>

              <h3>Federated Training</h3>

              <p>
                Training rounds, hospital nodes,
                model aggregation and performance.
              </p>

              <button className="category-btn">
                Generate Report
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>


            <div className="main-card report-category">

              <div className="report-category-icon purple">
                <i className="bi bi-shield-check"></i>
              </div>

              <h3>Validation & Audit</h3>

              <p>
                Calibration, bias audit, fairness and
                model validation results.
              </p>

              <button className="category-btn">
                Generate Report
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default Reports;