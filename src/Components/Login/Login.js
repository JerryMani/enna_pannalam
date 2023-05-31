import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "../../assets/logo.png"

import "./login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button variant="primary" onClick={handleShow} className='log-btn'>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className='reg-login-cont'>
            <div className='reg-login-logo-cont'>
                <img src={logo} alt="Tamil Matrimony" className='logo-log-img'/>
                <p className='reg-login-desc'>Welcome back! Please Login</p>
            </div>
            <hr/>
            <div>
                <form className='reg-log-from-details'>
                    <input type='text' placeholder='Enter Email ID' className='form-control'/>
                    <input type='tel' placeholder='Enter password' className='form-control'/>
                   
                    <button type='submit' className='btn btn-primary'> <Link to="/home">Login</Link></button>
                </form>
                <p className='forgot-pass'>Forgot password?</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='new-user-login'>
                <p>New user?</p>
               {/* <Link to="/">Register</Link> */}
               <button type='button' onClick={handleClose}>Register</button>
            </div>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
