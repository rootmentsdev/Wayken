import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SEO from '../components/SEO/SEO'

const Service = () => {
  return (
    <>
      <SEO 
        title="Services | Wayken Holdings"
        description="Explore our professional services at Wayken Holdings"
        keywords="wayken, holdings, services, solutions"
      />
      
      {/* Service Section */}
      <div 
        className="d-flex align-items-center"
        style={{ 
          backgroundColor: '#f0f0f0',
          minHeight: '664px'
        }}
      >
        <Container className="py-5">
          {/* Header Section */}
          <Row className="justify-content-center text-center mb-5">
            <Col xs={12} lg={10}>
              {/* Main Heading */}
              <h1 
                className="mb-2"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 5vw, 46px)',
                  lineHeight: '114%',
                  letterSpacing: '-0.03em',
                  color: '#1a1a1a',
                  textAlign: 'center'
                }}
              >
                More than capital
              </h1>
              
              <h2 
                className="mb-4"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(32px, 5vw, 46px)',
                  lineHeight: '114%',
                  letterSpacing: '-0.03em',
                  color: '#8A3E9D',
                  textAlign: 'center'
                }}
              >
                A long-term partnership.
              </h2>
              
              {/* Description Text */}
              <div 
                className="mx-auto mb-4 px-3" 
                style={{ 
                  maxWidth: '860px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '180%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#6c757d'
                }}
              >
                Our role evolves with each business, always focused on building strength and resilience.
                <br />
                We don't follow a fixed playbook. Every business is different, and our involvement adapts to what truly helps
                <br />
                at that stage—whether it's strategic direction, governance support, or long-term planning.
              </div>
            </Col>
          </Row>

          {/* Service Cards */}
          <Row className="justify-content-center g-4">
            {/* Card 1 - Long-Term Capital Partnership */}
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <Card 
                className="border-0 h-100"
                style={{
                  background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                  borderRadius: '24px',
                  maxWidth: '365px',
                  width: '100%',
                  border: '2px solid transparent'
                }}
              >
                <Card.Body 
                  className="text-white d-flex flex-column"
                  style={{
                    padding: '32px 40px',
                    minHeight: '211px'
                  }}
                >
                  {/* Header with Line */}
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      style={{
                        width: '40px',
                        height: '2px',
                        backgroundColor: 'white',
                        marginRight: '12px'
                      }}
                    ></div>
                    <h5 
                      className="mb-0 text-uppercase"
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        fontFamily: 'Manrope, sans-serif'
                      }}
                    >
                      LONG-TERM CAPITAL<br />PARTNERSHIP
                    </h5>
                  </div>
                  
                  {/* Card Text */}
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}
                  >
                    Patient capital with a long-term horizon—free from pressure for early exits.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 - Strategic Guidance */}
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <Card 
                className="border-0 h-100"
                style={{
                  background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                  borderRadius: '24px',
                  maxWidth: '365px',
                  width: '100%',
                  border: '2px solid transparent'
                }}
              >
                <Card.Body 
                  className="text-white d-flex flex-column"
                  style={{
                    padding: '32px 40px',
                    minHeight: '211px'
                  }}
                >
                  {/* Header with Line */}
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      style={{
                        width: '40px',
                        height: '2px',
                        backgroundColor: 'white',
                        marginRight: '12px'
                      }}
                    ></div>
                    <h5 
                      className="mb-0 text-uppercase"
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        fontFamily: 'Manrope, sans-serif'
                      }}
                    >
                      STRATEGIC GUIDANCE
                    </h5>
                  </div>
                  
                  {/* Card Text */}
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}
                  >
                    Support on planning, growth direction, capital allocation, and long-term decision-making.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 - Governance & Leadership Support */}
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
              <Card 
                className="border-0 h-100"
                style={{
                  background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                  borderRadius: '24px',
                  maxWidth: '365px',
                  width: '100%',
                  border: '2px solid transparent'
                }}
              >
                <Card.Body 
                  className="text-white d-flex flex-column"
                  style={{
                    padding: '32px 40px',
                    minHeight: '211px'
                  }}
                >
                  {/* Header with Line */}
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      style={{
                        width: '40px',
                        height: '2px',
                        backgroundColor: 'white',
                        marginRight: '12px'
                      }}
                    ></div>
                    <h5 
                      className="mb-0 text-uppercase"
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        fontFamily: 'Manrope, sans-serif'
                      }}
                    >
                      GOVERNANCE &<br />LEADERSHIP SUPPORT
                    </h5>
                  </div>
                  
                  {/* Card Text */}
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}
                  >
                    Clear governance structures and leadership alignment that scale with the business.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Get In Touch Section */}
      <div 
        className="d-flex align-items-center"
        style={{ 
          backgroundColor: '#09001D',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '830px'
        }}
      >
        {/* Background Text */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(80px, 15vw, 200px)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.03)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          Get In Touch
        </div>

        <Container className="position-relative" style={{ zIndex: 1 }}>
          {/* Main Heading */}
          <Row className="mb-5">
            <Col>
              <h2 
                className="text-white"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  lineHeight: '1.2'
                }}
              >
                Get In <span style={{ fontStyle: 'italic', color: '#B553B9' }}>Touch</span>
              </h2>
            </Col>
          </Row>

          <Row className="py-4">
            {/* Left Column - Info */}
            <Col lg={5} className="text-white mb-5 mb-lg-0">
              {/* What to Reach Out For */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    style={{
                      width: '40px',
                      height: '2px',
                      backgroundColor: 'white',
                      marginRight: '12px'
                    }}
                  ></div>
                  <h5 
                    className="mb-0 text-uppercase"
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '1.5px',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    WHAT TO REACH OUT FOR
                  </h5>
                </div>
                <ul 
                  className="list-unstyled"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '15px',
                    lineHeight: '2'
                  }}
                >
                  <li>• Strategic partnerships</li>
                  <li>• Long-term investment discussions</li>
                  <li>• Portfolio-related enquiries</li>
                  <li>• General information</li>
                </ul>
              </div>

              {/* Email */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div 
                    style={{
                      width: '40px',
                      height: '2px',
                      backgroundColor: 'white',
                      marginRight: '12px'
                    }}
                  ></div>
                  <h5 
                    className="mb-0 text-uppercase"
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '1.5px',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    EMAIL
                  </h5>
                </div>
                <p 
                  className="mb-0"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '15px'
                  }}
                >
                  Email: info@wayken.com
                </p>
              </div>

              {/* Location */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div 
                    style={{
                      width: '40px',
                      height: '2px',
                      backgroundColor: 'white',
                      marginRight: '12px'
                    }}
                  ></div>
                  <h5 
                    className="mb-0 text-uppercase"
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '1.5px',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    LOCATION
                  </h5>
                </div>
                <p 
                  className="mb-0"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '15px'
                  }}
                >
                  India | Globally Connected
                </p>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-4">
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#8A3E9D',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#8A3E9D',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#8A3E9D',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#8A3E9D',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </Col>

            {/* Right Column - Form */}
            <Col lg={7}>
              <div className="text-white mb-4">
                <p 
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '15px',
                    lineHeight: '1.6'
                  }}
                >
                  If you're a founder, business owner, or strategic partner who shares a long-term mindset, we'd be glad to connect.
                </p>
              </div>

              <Form>
                <Row className="mb-3">
                  <Col md={6} className="mb-3 mb-md-0">
                    <Form.Control 
                      type="text" 
                      placeholder="Your Name"
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: 'white',
                        padding: '12px 16px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif'
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control 
                      type="text" 
                      placeholder="Number"
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: 'white',
                        padding: '12px 16px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif'
                      }}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control 
                    type="email" 
                    placeholder="Email"
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: 'white',
                      padding: '12px 16px',
                      fontFamily: 'Plus Jakarta Sans, sans-serif'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control 
                    as="textarea" 
                    rows={5}
                    placeholder="Type Your Message"
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: 'white',
                      padding: '12px 16px',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      resize: 'none'
                    }}
                  />
                </Form.Group>

                <Button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(144.67deg, #783691 0%, #8A3E9D 50%, #B553B9 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 40px',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    letterSpacing: '0.5px'
                  }}
                >
                  Submit Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
