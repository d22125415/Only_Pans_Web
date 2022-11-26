import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import FeedScreen from './screens/FeedScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import emptyProfilePicture from './resources/img/PersonPlaceholder.png';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [profilePicture, setProfilePicture] = useState(emptyProfilePicture);
  const { userInfo } = state;

  useEffect(() => {
    const imgSrc = userInfo?.image ? userInfo.image : emptyProfilePicture;
    setProfilePicture(imgSrc);
  }, [userInfo]);

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };

  return (
    <BrowserRouter>
      <header>
        <Navbar bg={'primary'} variant={'light'}>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>OnlyPans 🍳</Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
              <Link to="/feed" className="nav-link">
                Feed
              </Link>
              <NavDropdown
                title={
                  <img
                    src={profilePicture}
                    alt="profile"
                    className="small-square-picture rounded-circle"
                  />
                }
              >
                {userInfo ? (
                  <>
                    <LinkContainer to="/profileSettings">
                      <NavDropdown.Item>Settings</NavDropdown.Item>
                    </LinkContainer>
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </>
                ) : (
                  <LinkContainer to="/signin">
                    <NavDropdown.Item>Sign in</NavDropdown.Item>
                  </LinkContainer>
                )}
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route
              path="/profileSettings"
              element={<ProfileSettingsScreen />}
            />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
