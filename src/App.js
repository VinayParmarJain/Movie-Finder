import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Post from './Post';
import { db } from './firebase';

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
        {posts.map((post) => (
          <Post
            // key={id}
            imageUrl={post.imageUrl}
            movieName={post.movieName}
            releaseYear={post.releaseYear}
            ticketPrice={post.ticketPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
