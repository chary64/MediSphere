import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Models() {
  const models = [
    {
      name: "DeepRisk-CVD",
      version: "v2.1",
      type: "Cardiovascular Risk",
      accuracy: "91.6%",
      status: "Production",
    },
    {
      name: "DiabetesComp",
      version: "v1.8",
      type: "Diabetes Complication",
      accuracy: "89.4%",
      status: "Production",
    },
    {
      name: "RiskPredict",
      version: "v3.0",
      type: "General Risk Prediction",
      accuracy: "93.1%",
      status: "Testing",
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
              <h1>AI Models</h1>

              <p>
                Manage federated learning healthcare risk models
              </p>
            </div>

            <button className="refresh-btn">
              <i className="bi bi-plus-lg me-2"></i>
              New Model
            </button>

          </div>


          {/* Model Statistics */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon blue">
                <i className="bi bi-cpu"></i>
              </div>

              <div>
                <p>Total Models</p>
                <h2>08</h2>
                <span>Available models</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon green">
                <i className="bi bi-check-circle"></i>
              </div>

              <div>
                <p>Production Models</p>
                <h2>05</h2>
                <span>Currently active</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon purple">
                <i className="bi bi-graph-up"></i>
              </div>

              <div>
                <p>Average Accuracy</p>
                <h2>91.3%</h2>
                <span>Across models</span>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <div>
                <p>Training Round</p>
                <h2>47</h2>
                <span>Current round</span>
              </div>

            </div>

          </div>


          {/* Models */}

          <div className="main-card">

            <div className="card-header">

              <div>
                <h2>Available Models</h2>

                <p>
                  Federated healthcare AI models
                </p>
              </div>

            </div>


            <div className="model-grid">

              {models.map((model) => (

                <div className="model-card" key={model.name}>

                  <div className="model-card-icon">
                    <i className="bi bi-cpu-fill"></i>
                  </div>

                  <div className="model-card-header">

                    <div>
                      <h3>{model.name}</h3>
                      <span>{model.version}</span>
                    </div>

                    <span
                      className={
                        model.status === "Production"
                          ? "model-status production"
                          : "model-status testing"
                      }
                    >
                      {model.status}
                    </span>

                  </div>


                  <p className="model-type">
                    {model.type}
                  </p>


                  <div className="model-detail">

                    <span>Accuracy</span>

                    <strong>
                      {model.accuracy}
                    </strong>

                  </div>


                  <div className="model-detail">

                    <span>Framework</span>

                    <strong>
                      TensorFlow Federated
                    </strong>

                  </div>


                  <div className="model-detail">

                    <span>Explainability</span>

                    <strong>
                      SHAP
                    </strong>

                  </div>


                  <button className="model-view-btn">
                    View Model
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>
      </main>
    </>
  );
}

export default Models;