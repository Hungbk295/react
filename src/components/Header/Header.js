import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLessThanEqual } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const account = useSelector(state => state.user.account);
  
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to='/' className='navbar-brand' >Jaychun</NavLink>
              
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="users">Users</Nav.Link>
            <Nav.Link href="admins">Admin</Nav.Link> */}
            <NavLink to='/' className='nav-link' >Home</NavLink>
            <NavLink to='/users' className='nav-link' >User</NavLink>
            <NavLink to='/admins' className='nav-link' >Admin</NavLink>
            
          </Nav>
          <Nav>
            {isAuthenticated === false ?
              <div>
                <button className='btn-login' onClick={() => handleLogin()}>Log In</button>
                <button className='btn-signup'>Sign Up</button>
              </div>
              :
              <>
                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2"> Logout</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">profile</NavDropdown.Item>
                </NavDropdown>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header ;