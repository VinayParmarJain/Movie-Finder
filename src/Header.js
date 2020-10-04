import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap';
import AddMovie from './AddMovie';
import { auth } from './firebase';

function Header() {
  const [showLogin, setShowLogin] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showss, setShowss] = useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
        // user logged out...
      }
    });

    return () => {
      // Perform some cleanup actions
      unsubscribe();
    };
  }, [user, username]);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    setShowSignUp(false);
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setShowLogin(false);
  };

  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand className='ml-5' href='#home'>
          Movie Finder
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Form inline className='ml-5'>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          </Form>
        </Nav>

        {/* Add Movies  */}
        {/* 
        <Button className='mr-2' variant='outline-info' onClick={handleShoww}>
          Add Book
        </Button> */}

        <Modal show={showss} onHide={setShowss}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddMovie />
          </Modal.Body>
        </Modal>

        {/* SignUp */}

        <Modal show={showSignUp} onHide={setShowSignUp}>
          <Modal.Header closeButton>
            <Modal.Title>SignUp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='text'>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='User Name'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={signUp}>
                SignUp
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Login */}

        <Modal show={showLogin} onHide={setShowLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={signIn}>
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <div className='app__header'>
          {user ? (
            <>
              <Button
                className='mr-2'
                variant='outline-info'
                onClick={() => setShowss(true)}>
                Add Book
              </Button>
              <Button onClick={() => auth.signOut()}>Logout</Button>
            </>
          ) : (
            <div className='app__loginContainer'>
              <Button
                style={{ display: 'none' }}
                variant='outline-primary'
                onClick={() => setShowLogin(true)}>
                Sign In
              </Button>
              <Button
                variant='outline-primary'
                onClick={() => setShowSignUp(true)}>
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
