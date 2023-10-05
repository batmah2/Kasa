import { Link } from "react-router-dom";

export default function Card({housing}) {
    return (
        <Link to={`/logements/${housing.id}`} className="card">
          <img src={housing.cover} alt={housing.cover} />
          <p>{housing.title}</p>
        </Link>
      );
}