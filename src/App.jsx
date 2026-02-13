import axios from "axios";
import { useEffect, useState } from "react";
import CastCard from "./components/CastCard";

const acrtessesApi = "https://lanciweb.github.io/demo/api/actresses/";
const actorsApi = "https://lanciweb.github.io/demo/api/actors/";

export default function App() {
  const [femalesList, setFemalesList] = useState([]);
  const [malesList, setMalesList] = useState([]);

  const [showOption, setShowOption] = useState(0);

  const getApiData = (femaleApiUrl) => axios.get(femaleApiUrl);

  useEffect(() => {
    Promise.all([getApiData(acrtessesApi), getApiData(actorsApi)])
      .then((res) => {
        setFemalesList(res[0].data);
        setMalesList(res[1].data);
      })
      .catch((e) => {
        alert("API ERROR: " + e.message);
      });
  }, []);

  const hanldeShowOption = (option) => {
    if (showOption === 2 && option === 2) {
      setShowOption(0);
    } else {
      setShowOption(option);
    }
  };

  return (
    <div id="app" className="container-fluid p-0 h-100 d-flex flex-column">
      <header className="text-center ">
        <h1 className="text-primary mb-0 p-3">CAST FETCHING</h1>
        <div
          id="opt"
          className="d-flex justify-content-around align-items-center"
        >
          <button
            className="btn btn-danger my-4 px-4 py-2"
            onClick={() => hanldeShowOption(1)}
          >
            ACTRESSES
          </button>
          <button
            className="btn btn-light my-4 px-4 py-2"
            onClick={() => hanldeShowOption(2)}
          >
            ALL / HIDE
          </button>
          <button
            className="btn btn-primary my-4 px-4 py-2"
            onClick={() => hanldeShowOption(3)}
          >
            ACTORS
          </button>
        </div>
      </header>
      <main className="flex-grow-1">
        <div className="container py-4 text-center">
          <div
            id="actresses"
            className={`mb-4 ${showOption === 1 || showOption === 2 ? "" : "d-none"}`}
          >
            <h2 className="text-danger">ACTRESSES</h2>
            <div className="row row-cols-2 g-4">
              {femalesList.map((dataItem) => (
                <CastCard key={dataItem.id} item={dataItem} />
              ))}
            </div>
          </div>
          <div
            id="actors"
            className={`mb-4 ${showOption === 3 || showOption === 2 ? "" : "d-none"}`}
          >
            <h2 className="text-primary">ACTORS</h2>
            <div className="row row-cols-2 g-4">
              {malesList.map((dataItem) => (
                <CastCard key={dataItem.id} item={dataItem} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
