import React, { useState } from 'react';
import { Button, InputGroup, ProgressBar } from 'react-bootstrap';
import { storage, db } from './firebase';
import firebase from 'firebase';

function AddMovie() {
  const [image, setImage] = useState(null);
  const [movieName, setMovieName] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(progress);
      },
      (error) => {
        // error
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              imageUrl: url,
              movieName: movieName,
              releaseYear: releaseYear,
              ticketPrice: ticketPrice,
            });

            setMovieName('');
            setReleaseYear('');
            setTicketPrice('');
            setImage(null);
          });
      },
    );
  };

  return (
    <InputGroup className='mb-3'>
      <div>
        <input type='file' onChange={handleChange} />
        <br />
        <input
          type='text'
          placeholder='Enter Movie Name'
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
        />
        <br />
        <input
          type='number'
          placeholder='Enter Release Year'
          onChange={(e) => setReleaseYear(e.target.value)}
          value={releaseYear}
        />
        <br />
        <input
          type='number'
          placeholder='Enter Ticket Price'
          onChange={(e) => setTicketPrice(e.target.value)}
          value={ticketPrice}
        />
        <br />
        <Button variant='primary' onClick={handleUpload}>
          Upload
        </Button>
        <ProgressBar
          className='imageupload__progress'
          value={progress}
          max='100'
        />
      </div>
    </InputGroup>
  );
}

export default AddMovie;
