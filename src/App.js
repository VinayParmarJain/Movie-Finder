import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Post from './Post';
import { db } from './firebase';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('releaseYear', 'asc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <Header />

      <div>
        <Container>
          <Row>
            {posts.map((post) => (
              <Col className='mt-5' xs={6} md={4}>
                <Post
                  // key={0}
                  imageUrl={post.imageUrl}
                  movieName={post.movieName}
                  releaseYear={post.releaseYear}
                  ticketPrice={post.ticketPrice}
                  timestamp={post.timestamp}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
