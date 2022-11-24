import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import FeedScreen from './screens/FeedScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileSettingScreen from './screens/ProfileSettingScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
import { useContext } from 'react';
import { Store } from './Store';
function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
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
              <Navbar.Brand>OnlyPans</Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
              <Link to="/feed" className="nav-link">
                Feed
              </Link>

              {userInfo ? (
                <Link onClick={signoutHandler} className="nav-link">
                  Sign out
                </Link>
              ) : (
                <Link to="/signin" className="nav-link">
                  Sign in
                </Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/profilesettings" element={<ProfileSettingScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
