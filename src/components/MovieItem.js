import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
function MovieItem({ title, category, cast, rate, cover, release, id }) {
  return (
    <Card className="movie-item" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cover} width={300} height={400} />
      <Card.Body>
        <Card.Title
          style={{ height: 50, color: "#000" }}
          className="card-title"
        >
          {title}
        </Card.Title>
        {/* <Card.Text>Cast : </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <span> Cast : </span> {cast}
        </ListGroup.Item>
        <ListGroup.Item>
          <span> Rate : </span>
          {rate}
        </ListGroup.Item>
        <ListGroup.Item>
          <span> Category : </span> {category}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Release date : </span>
          {release}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className="card-link">
          <Link
            to={`/movie/${id}`}
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Details
          </Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
