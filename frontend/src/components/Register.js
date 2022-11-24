import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getBase64StringOfBlob } from '../utils.js';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailIsInvalide, setEmailIsInvalide] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordIsInvalide, setPasswordIsInvalide] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordIsInvalide(true);
      return;
    }

    const profilePictureBase64 =
      profilePicture && (await getBase64StringOfBlob(profilePicture));

    const result = await axios
      .post('http://localhost:3600/api/user/register', {
        name: name,
        email: email,
        password: password,
        profilePicture: profilePictureBase64,
      })
      .catch((err) => {
        return err.response;
      });

    if (result.status === 409) {
      setEmailIsInvalide(true);
      return;
    }
  };
  return (
    <div>
      <h1 className="my-3">Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            isInvalid={emailIsInvalide}
            required
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailIsInvalide(false);
            }}
          />
          <Form.Control.Feedback type="invalid">
            e-mail already in use
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            isInvalid={passwordIsInvalide}
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordIsInvalide(false);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Passwords must be same
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="profile_picture">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group>
          <div className="mb-3">
            <Button type="submit">Sign Up</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
