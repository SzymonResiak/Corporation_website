import { useState, useEffect } from "react";

const url = "http://127.0.0.1:8000/docs/";

const Dashboard = () => {
  const [dataToDownload, setDataToDownload] = useState([]);

  const fetchDownloadFilesData = async () => {
    try {
      const response = await fetch(url);
      const dataToDownload = await response.json();
      console.log(dataToDownload);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDownloadFilesData();
  }, []);

  return (
    <div>
      <main className="dashboard-container">
        <section className="dashboard-section">
          <div className="dashboard-news">
            <div className="section-title-wrapper">
              <h2>Latest news</h2>
            </div>
          </div>
          <div className="dashboard-download">
            <div className="section-title-wrapper">
              <h2>Download Box</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
