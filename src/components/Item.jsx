import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


function Item({ item }) {
  return (
    <Col xs={12} sm={6} md={3} lg={3}>
      <Card className="w-100">
        <Card.Img variant="top" src={item.images} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button as={Link} to={`/item/${item.id}`}>
            Ver mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item