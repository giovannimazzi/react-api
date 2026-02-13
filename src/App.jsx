import axios from "axios";
import { useEffect, useState } from "react";

const acrtessesApi = "https://lanciweb.github.io/demo/api/actresses/";
const actorsApi = "https://lanciweb.github.io/demo/api/actors/";

export default function App() {
  /*  const [dataList, setDataList] = useState([]);
   */
  const getApiData = (ApiUrl) => {
    axios
      .get(ApiUrl)
      .then((res) => console.log(res.data))
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
        <h1 className="text-primary mb-0">CAST FETCHING</h1>
      </header>
      <main className="flex-grow-1">
        <div className="container py-4">
          <div className="row row-cols-2">
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
