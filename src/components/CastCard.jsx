const nationalityFlags = [
  { nationality: "American", flag: "us" },
  { nationality: "British", flag: "gb" },
  { nationality: "Australian", flag: "au" },
  { nationality: "Israeli-American", flag: ["il", "us"] },
  { nationality: "South African", flag: "za" },
  { nationality: "French", flag: "fr" },
  { nationality: "Indian", flag: "in" },
  { nationality: "Israeli", flag: "il" },
  { nationality: "Spanish", flag: "es" },
  { nationality: "South Korean", flag: "kr" },
  { nationality: "Chinese", flag: "cn" },
  { nationality: "Scottish", flag: "gb-sct" },
  { nationality: "New Zealand", flag: "nz" },
  { nationality: "Hong Kong", flag: "hk" },
  { nationality: "German", flag: "de" },
  { nationality: "Canadian", flag: "ca" },
  { nationality: "Irish", flag: "ie" },
];

export default function CastCard({ item }) {
  const movies = item.most_famous_movies ?? item.known_for ?? [];
  return (
    <div className="col">
      <div className="card g-0 h-100 text-start">
        <div className="row g-0">
          <div className="col-md-4 img-card-container">
            <img
              src={item.image}
              className={`w-100 h-100 object-fit-cover rounded-start ${item.id === 3 ? "hepburn-img" : ""}`}
              alt={item.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>

              <h6 className="card-subtitle mb-2 text-body-secondary d-flex align-items-center">
                {item.birth_year} - {item.nationality}{" "}
                {item.nationality.includes("-") ? (
                  <>
                    <img
                      src={`https://flagcdn.com/28x21/${nationalityFlags.find((n) => n.nationality === item.nationality).flag[0]}.png`}
                      alt="flag"
                      className="ms-2 "
                    />
                    <img
                      src={`https://flagcdn.com/28x21/${nationalityFlags.find((n) => n.nationality === item.nationality).flag[1]}.png`}
                      alt="flag"
                      className="ms-2 "
                    />
                  </>
                ) : (
                  <img
                    src={`https://flagcdn.com/28x21/${nationalityFlags.find((n) => n.nationality === item.nationality).flag}.png`}
                    alt="flag"
                    className="ms-2 "
                  />
                )}
              </h6>

              <p className="card-text">{item.biography}</p>
              <div className="card-text mb-2">
                <strong className="text-muted">Awards: </strong>
                <span className="text-body-secondary">{item.awards}</span>
              </div>
              <div className="card-text">
                <strong className="text-muted">Most Famous Movies: </strong>
                <span className="text-body-secondary">{movies.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
