import { useState } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import WaykenLogo from '../../assets/WaykenLogo.png'

const Header = () => {
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navLinkStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '100%',
    textDecoration: 'none'
  }

  const getNavLinkStyle = (isActive) => ({
    ...navLinkStyle,
    borderBottom: isActive ? '2px solid #7c3aed' : '2px solid transparent',
    paddingBottom: '4px',
    color: isActive ? '#1a1a1a' : '#6b7280'
  })

  const handleNavClick = () => {
    setExpanded(false)
  }

  const handlePortfolioClick = () => {
    setExpanded(false)
    
    // Navigate to home page first, then scroll to section
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('portfolio-section')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  return (
    <Navbar 
      expand="lg" 
      bg="white" 
      className="py-3 border-bottom"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img 
            src={WaykenLogo} 
            alt="Wayken Holdings" 
            style={{ 
              height: '40px',
              width: 'auto'
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="main-navbar" 
          className="border-0 shadow-none"
        />
        
        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          <Nav className="mx-auto flex-column flex-lg-row py-3 py-lg-0">
            <NavLink 
              to="/" 
              end
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              About
            </NavLink>
            <NavLink 
              to="/service" 
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              Service
            </NavLink>
            <button
              className="nav-link mx-lg-2 my-2 my-lg-0 border-0 bg-transparent text-start w-100 d-flex align-items-center"
              style={{
                ...navLinkStyle,
                borderBottom: '2px solid transparent',
                paddingBottom: '4px',
                paddingLeft: '0',
                paddingRight: '0',
                color: '#6b7280',
                cursor: 'pointer'
              }}
              onClick={handlePortfolioClick}
            >
              Portfolio
            </button>
          </Nav>

          <div className="py-3 py-lg-0">
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button 
                className="rounded-pill"
                style={{
                  background: 'linear-gradient(165.39deg, #030140 0%, #4F2374 50.48%, #A54BAE 100%)',
                  border: 'none',
                  width: '158px',
                  height: '48px',
                  padding: '13px 32px',
                  borderRadius: '50px',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: 'white'
                }}
                onClick={handleNavClick}
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
