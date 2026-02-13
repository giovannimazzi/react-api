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
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {item.birth_year} - {item.nationality}
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
