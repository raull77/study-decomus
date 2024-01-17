import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Basic() {
  return (
    <Card style={{ width: '18rem' }}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1" />
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Basic;