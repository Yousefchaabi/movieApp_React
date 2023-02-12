import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function MovieItem(props) {
  return (
    <Card className="movie-item" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.cover} width={300} height={400} />
      <Card.Body>
        <Card.Title
          style={{ height: 50, color: "#000" }}
          className="card-title"
        >
          {props.title}
        </Card.Title>
        {/* <Card.Text>Cast : </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <span> Cast : </span> {props.cast}
        </ListGroup.Item>
        <ListGroup.Item>
          <span> Rate : </span>
          {props.rate}
        </ListGroup.Item>
        <ListGroup.Item>
          <span> Category : </span> {props.category}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Release date : </span>
          {props.release}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link variant="white" className="card-link">
          See more
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
