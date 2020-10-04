import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';

function Post({ imageUrl, movieName, ticketPrice, releaseYear, timestamp }) {
  console.log(timestamp);
  return (
    <Card className='box' style={{ width: '18rem' }}>
      <Card.Img style={{ height: '350px' }} variant='top' src={imageUrl} />
      <Card.Body>
        <Card.Title>{movieName}</Card.Title>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Ticket Price : {ticketPrice}</ListGroupItem>
          <ListGroupItem>Year of release : {releaseYear}</ListGroupItem>
          {/* <ListGroupItem>Created at : {uploadTime}</ListGroupItem> */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Post;
