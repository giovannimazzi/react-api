import axios from "axios";
import { useEffect, useState } from "react";

const acrtessesApi = "https://lanciweb.github.io/demo/api/actresses/";
const actorsApi = "https://lanciweb.github.io/demo/api/actors/";

export default function App() {
  const [dataList, setDataList] = useState([]);

  const getApiData = (ApiUrl) => {
    axios
      .get(ApiUrl)
      .then((res) => setDataList(res.data))
      .catch((e) => {
        alert("API ERROR: " + e.message);
      });
  };

  useEffect(() => {
    getApiData(acrtessesApi);
  }, []);

  return (
    <div id="app" className="container-fluid p-0 h-100 d-flex flex-column">
      <header className="text-center ">
        <h1 className="text-primary mb-0 p-3">CAST FETCHING</h1>
      </header>
      <main className="flex-grow-1">
        <div className="container py-4">
          <div className="row row-cols-2 g-4">
            {dataList.map((dataItem) => {
              return (
                <div key={dataItem.id} className="col">
                  <div className="card g-0 h-100">
                    <div className="row g-0">
                      <div className="col-md-4 img-card-container">
                        <img
                          src={dataItem.image}
                          className={`w-100 h-100 object-fit-cover rounded-start ${dataItem.id === 3 ? "hepburn-img" : ""}`}
                          alt={dataItem.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{dataItem.name}</h5>
                          <h6 className="card-subtitle mb-2 text-body-secondary">
                            {dataItem.birth_year} - {dataItem.nationality}
                          </h6>
                          <p className="card-text">{dataItem.biography}</p>
                          <div className="card-text">
                            <strong className="text-muted">Awards: </strong>
                            <span className="text-body-secondary">
                              {dataItem.awards}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
