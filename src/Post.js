import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';

function Post({ imageUrl, movieName, ticketPrice, releaseYear, timestamp }) {
  // var stringified = timestamp.toDate().toDateString();
  // console.log(stringified);

  return (
    <Card className='box' style={{ width: '18rem' }}>
      <Card.Img style={{ height: '350px' }} variant='top' src={imageUrl} />
      <Card.Body>
        <Card.Title>{movieName}</Card.Title>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Year of release : {releaseYear}</ListGroupItem>
          <ListGroupItem>Ticket Price : {ticketPrice}</ListGroupItem>
          {/* <ListGroupItem style={{ fontSize: '14px' }}>
            Created on :{stringified}
          </ListGroupItem> */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Post;
