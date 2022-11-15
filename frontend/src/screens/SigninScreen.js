import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';

export default function SigninScreen() {
  const { dispatch: ctxDispatch } = useContext(Store);
  const signinHandler = () => {
    ctxDispatch({ type: 'USER_SIGNIN' });
  };
  return <Button onClick={signinHandler}>Sign In</Button>;
}
