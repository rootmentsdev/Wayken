import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer 
      className="py-5"
      style={{
        backgroundColor: '#f8f9fa',
        fontFamily: 'Manrope, sans-serif'
      }}
    >
      <Container>
        {/* Main Footer Content */}
        <Row className="pb-4 mb-4 border-bottom">
          {/* Brand Section */}
          <Col lg={5} md={6} className="mb-4 mb-lg-0">
            <div className="mb-4">
              <div className="d-flex flex-column">
                <span 
                  className="fw-bold text-dark" 
                  style={{ 
                    fontSize: '1.5rem', 
                    letterSpacing: '0.15em',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700
                  }}
                >
                  WAYKEN
                </span>
                <small 
                  className="text-secondary" 
                  style={{ 
                    fontSize: '0.6rem', 
                    letterSpacing: '0.2em',
                    fontWeight: 500
                  }}
                >
                  HOLDINGS
                </small>
              </div>
            </div>
            
            <p 
              className="text-secondary mb-4"
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                maxWidth: '300px'
              }}
            >
              Empowering visionaries and building sustainable enterprises for a better tomorrow.
            </p>
            
            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a 
                href="#" 
                className="text-dark"
                style={{ fontSize: '18px' }}
              >
                f
              </a>
              <a 
                href="#" 
                className="text-dark"
                style={{ fontSize: '18px' }}
              >
                𝕏
              </a>
              <a 
                href="#" 
                className="text-dark"
                style={{ fontSize: '18px' }}
              >
                in
              </a>
              <a 
                href="#" 
                className="text-dark"
                style={{ fontSize: '18px' }}
              >
                ⓘ
              </a>
            </div>
          </Col>

          {/* Spacer */}
          <Col lg={1} className="d-none d-lg-block"></Col>

          {/* Explore Section */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h6 
              className="text-uppercase mb-3"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                color: '#8A3E9D',
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              EXPLORE
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/about" 
                  className="text-secondary text-decoration-none"
                  style={{ fontSize: '14px' }}
                >
                  Who We Are
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/portfolio" 
                  className="text-secondary text-decoration-none"
                  style={{ fontSize: '14px' }}
                >
                  Our Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/about" 
                  className="text-secondary text-decoration-none"
                  style={{ fontSize: '14px' }}
                >
                  Leadership
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/blog" 
                  className="text-secondary text-decoration-none"
                  style={{ fontSize: '14px' }}
                >
                  News & Insights
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col lg={3} md={6}>
            <h6 
              className="text-uppercase mb-3"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                color: '#8A3E9D',
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              CONTACT
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="mailto:info@wayken.com" 
                  className="text-secondary text-decoration-none"
                  style={{ fontSize: '14px' }}
                >
                  info@wayken.com
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="tel:+911234567890" 
                  className="text-secondary text-decoration-none"
                  style={{ fontSize: '14px' }}
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="mb-2">
                <span 
                  className="text-secondary"
                  style={{ fontSize: '14px' }}
                >
                  Calicut, Kerala India
                </span>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className="pt-3">
          <Col md={6} className="mb-3 mb-md-0">
            <p 
              className="text-secondary mb-0"
              style={{ fontSize: '13px' }}
            >
              © 2026 Wayken Holdings. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <Link 
              to="/privacy" 
              className="text-secondary text-decoration-none me-4"
              style={{ fontSize: '13px' }}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-secondary text-decoration-none"
              style={{ fontSize: '13px' }}
            >
              Terms of Service
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
