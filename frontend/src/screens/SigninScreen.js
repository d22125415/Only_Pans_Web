import React, { useContext, useState } from 'react';

import { Store } from '../Store';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Singin from '../components/Singin.js';
import Register from '../components/Register';

export default function SigninScreen() {
  const { dispatch: ctxDispatch } = useContext(Store);

  const [wants_to_singin, setWants_to_singin] = useState(true);

  const signinHandler = () => {
    ctxDispatch({ type: 'USER_SIGNIN' });
  };
  const submitHandler = () => {};
  return (
    <Container className="border rounded small-container">
      {wants_to_singin ? <Singin></Singin> : <Register />}

      <Row className="mb-3">
        <Col
          className={
            wants_to_singin ? 'border-top text-center' : ' text-center'
          }
          onClick={() => {
            setWants_to_singin(true);
          }}
        >
          Sign In
        </Col>
        <Col
          className={
            wants_to_singin ? ' text-center' : 'border-top text-center'
          }
          onClick={() => {
            setWants_to_singin(false);
          }}
        >
          Register
        </Col>
      </Row>
    </Container>
  );
}
