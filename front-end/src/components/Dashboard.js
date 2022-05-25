import { useState, useEffect, useContext } from "react";
import { BsDownload } from "react-icons/bs";
import AuthContext from "../context/AuthProvider";

const url = "http://127.0.0.1:8000/docs/";

const Dashboard = () => {
  const [dataToDownload, setDataToDownload] = useState([]);
  const { auth } = useContext(AuthContext);

  const fetchDownloadFilesData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      const dataFromResponse = await response.json();
      setDataToDownload(dataFromResponse);
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
              <div>
                {dataToDownload.map((element) => {
                  return (
                    <article key={element.id} className="download-wrapper">
                      <p>Title: {element.title}</p>
                      <a
                        href={`http://127.0.0.1:8000/docs/${element.id}/`}
                        className="download-btn"
                      >
                        <p>Download</p>{" "}
                        <BsDownload style={{ fontSize: "1.2rem" }} />
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
