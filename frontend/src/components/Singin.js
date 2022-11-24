import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Store } from '../Store.js';
import { useNavigate } from 'react-router-dom';

export default function Singin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await axios
      .post('http://localhost:3600/api/user/signin', {
        email,
        password,
      })
      .catch((err) => {
        return err.response;
      });
    if (result.status === 401) {
      console.log(result.data.message);
      return;
    }
    console.log(result);
    ctxDispatch({ type: 'USER_SIGNIN', payload: result.data });
    localStorage.setItem('userInfo', JSON.stringify(result.data));
    navigate('/');
  };

  return (
    <div>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <div className="mb-3">
            <Button type="submit">Sign In</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
