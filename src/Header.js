import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap';
import AddMovie from './AddMovie';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);
  const handleShows = () => setShows(true);
  const handleClosed = () => setShows(false);

  const [showss, setShowss] = useState(false);
  const handleClosedd = () => setShowss(false);
  const handleShoww = () => setShowss(true);

  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Movie Finder</Navbar.Brand>
        <Nav className='mr-auto'>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          </Form>
        </Nav>

        {/* Add Movies  */}

        <Button variant='outline-info' onClick={handleShoww}>
          Add Book
        </Button>

        <Modal show={showss} onHide={handleClosedd}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddMovie />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClosedd}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Login */}

        <Button variant='outline-primary' onClick={handleShow}>
          Login
        </Button>

        <Modal show={show} onHide={handleClose}>
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
              <Button variant='primary' type='submit'>
                Login
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* SignUp */}

        <Button variant='outline-primary' onClick={handleShows}>
          SignUp
        </Button>

        <Modal show={shows} onHide={handleClosed}>
          <Modal.Header closeButton>
            <Modal.Title>SignUp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='text'>
                <Form.Label>User Name</Form.Label>
                <Form.Control type='text' placeholder='User Name' />
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button variant='primary' type='submit'>
                SignUp
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClosed}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    </div>
  );
}

export default Header;
