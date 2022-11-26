import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { getBase64StringOfBlob } from '../utils.js';
import axios from 'axios';
import { Store } from '../Store.js';
import { useNavigate } from 'react-router-dom';
import emptyProfilePicture from '../resources/img/PersonPlaceholder.png';

export default function ProfileSettingsScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [name, setName] = useState(userInfo?.name);
  const [email, setEmail] = useState(userInfo?.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordIsInvalide, setPasswordIsInvalide] = useState(false);
  const [profilePicture, setProfilePicture] = useState(userInfo?.image);

  const setProfilePictureBase64 = async (newPicture) => {
    const profilePictureBase64 =
      newPicture && (await getBase64StringOfBlob(newPicture));
    setProfilePicture(profilePictureBase64);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordIsInvalide(true);
      return;
    }

    const result = await axios
      .put('/api/user/update', {
        name: name,
        email: email,
        password: password,
        profilePicture: profilePicture,
      })
      .catch((err) => {
        return err.response;
      });

    if (result.status === 200) {
      ctxDispatch({ type: 'USER_SIGNIN', payload: result.data });
      localStorage.setItem('userInfo', JSON.stringify(result.data));
      navigate('/');
      return;
    }
  };

  const deleteProfile = async () => {
    try {
      const result = axios.delete(`/api/user/${email}`, { email: email });
      console.log(result.response?.message);
      ctxDispatch({ type: 'USER_SIGNOUT' });
      localStorage.removeItem('userInfo');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="my-3">Update Profile</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            required
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email" aria-disabled>
          <Form.Label className="text-muted">Email</Form.Label>
          <Form.Control
            className="text-muted"
            readOnly
            type="email"
            required
            defaultValue={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            isInvalid={passwordIsInvalide}
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
          <Container className="mb-1">
            <img
              src={
                profilePicture
                  ? profilePicture
                  : userInfo?.image
                  ? userInfo.image
                  : emptyProfilePicture
              }
              alt="current Profile"
              className="medium-square-picture"
            />
          </Container>

          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePictureBase64(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group>
          <div className="d-flex justify-content-between mb-3">
            <Button type="submit">Update</Button>
            <Button onClick={() => deleteProfile()} variant="warning">
              Delete Profile
            </Button>
          </div>
          <div className="mb-3"></div>
        </Form.Group>
      </Form>
    </div>
  );
}
