import React from 'react';
import { Card, ListGroupItem, ListGroup, Container } from 'react-bootstrap';

function Post({ imageUrl, movieName, ticketPrice, releaseYear, timestamp }) {
  console.log(timestamp);
  return (
    <Container>
      <Card className='box' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={imageUrl} />
        <Card.Body>
          <Card.Title>{movieName}</Card.Title>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>Ticket Price : {ticketPrice}</ListGroupItem>
            <ListGroupItem>Year of release : {releaseYear}</ListGroupItem>
            {/* <ListGroupItem>Created at : {uploadTime}</ListGroupItem> */}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Post;
