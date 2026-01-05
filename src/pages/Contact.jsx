import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import SEO from '../components/SEO/SEO'
import { submitToGoogleSheets, validateForm } from '../utils/formHandler'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitToGoogleSheets({
        ...formData,
        source: 'Contact Page'
      });

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'There was an error sending your message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <SEO 
        title="Contact | Wayken Holdings"
        description="Get in touch with Wayken Holdings - Contact us for partnerships and inquiries"
        keywords="wayken, holdings, contact, get in touch, partnerships"
      />
      
      {/* Get In Touch Section */}
      <div 
        className="d-flex align-items-center"
        style={{ 
          backgroundColor: '#0A0020',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          padding: '80px 0'
        }}
      >
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row>
            {/* Left Column - Form */}
            <Col lg={6} className="mb-5 mb-lg-0">
              {/* Contact Label */}
              <div className="d-flex align-items-center mb-4">
                <div 
                  style={{
                    width: '50px',
                    height: '2px',
                    backgroundColor: '#4ECDC4',
                    marginRight: '12px'
                  }}
                ></div>
                <span 
                  className="text-uppercase"
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    color: '#4ECDC4'
                  }}
                >
                  CONTACT
                </span>
              </div>

              {/* Main Heading */}
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  lineHeight: '1.2'
                }}
              >
                Get In <span style={{ color: '#B553B9' }}>Touch.</span>
              </h2>

              {/* Description */}
              <p 
                className="mb-5"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '500px'
                }}
              >
                If you're a founder, business owner, or strategic partner who shares a long-term mindset, we'd be glad to connect.
              </p>

              {/* Form */}
              {submitStatus && (
                <Alert 
                  variant={submitStatus.type === 'success' ? 'success' : 'danger'}
                  className="mb-4"
                  style={{
                    backgroundColor: submitStatus.type === 'success' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                    border: `1px solid ${submitStatus.type === 'success' ? '#28a745' : '#dc3545'}`,
                    color: submitStatus.type === 'success' ? '#28a745' : '#dc3545'
                  }}
                >
                  {submitStatus.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6} className="mb-3 mb-md-0">
                    <Form.Control 
                      type="text" 
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      isInvalid={!!errors.name}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${errors.name ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: '12px',
                        color: 'white',
                        padding: '16px 20px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '15px'
                      }}
                      className="form-control-dark"
                    />
                    {errors.name && (
                      <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                        {errors.name}
                      </div>
                    )}
                  </Col>
                  <Col md={6}>
                    <Form.Control 
                      type="text" 
                      name="phone"
                      placeholder="Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      isInvalid={!!errors.phone}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${errors.phone ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: '12px',
                        color: 'white',
                        padding: '16px 20px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '15px'
                      }}
                      className="form-control-dark"
                    />
                    {errors.phone && (
                      <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                        {errors.phone}
                      </div>
                    )}
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${errors.email ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '12px',
                      color: 'white',
                      padding: '16px 20px',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '15px'
                    }}
                    className="form-control-dark"
                  />
                  {errors.email && (
                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                      {errors.email}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control 
                    as="textarea" 
                    rows={5}
                    name="message"
                    placeholder="Type Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    isInvalid={!!errors.message}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${errors.message ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '12px',
                      color: 'white',
                      padding: '16px 20px',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '15px',
                      resize: 'none'
                    }}
                    className="form-control-dark"
                  />
                  {errors.message && (
                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                      {errors.message}
                    </div>
                  )}
                </Form.Group>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? '#6c757d' : '#4ECDC4',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '14px 45px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '15px',
                    letterSpacing: '0.5px',
                    color: '#0A0020',
                    transition: 'all 0.3s',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                  className="submit-btn"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </Button>
              </Form>
            </Col>

            {/* Right Column - Info */}
            <Col lg={6} className="text-white d-flex align-items-center">
              <div className="ps-lg-5">
                {/* What to Reach Out For */}
                <div className="mb-5">
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: 'white'
                    }}
                  >
                    What to reach out for
                  </h3>
                  <ul 
                    className="list-unstyled"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '16px',
                      lineHeight: '2.2',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <li className="mb-2">• Strategic partnerships</li>
                    <li className="mb-2">• Long-term investment discussions</li>
                    <li className="mb-2">• Portfolio-related enquiries</li>
                    <li className="mb-2">• General information</li>
                  </ul>
                </div>

                {/* Email Section */}
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      style={{
                        width: '50px',
                        height: '2px',
                        backgroundColor: '#4ECDC4',
                        marginRight: '12px'
                      }}
                    ></div>
                    <span 
                      className="text-uppercase"
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        color: '#4ECDC4'
                      }}
                    >
                      EMAIL
                    </span>
                  </div>
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'white'
                    }}
                  >
                    Email: info@wayken.com
                  </p>
                </div>

                {/* Social Icons */}
                <div className="d-flex gap-3">
                  <a 
                    href="#" 
                    className="d-flex align-items-center justify-content-center social-icon"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#8A3E9D',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      fontSize: '18px'
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="#" 
                    className="d-flex align-items-center justify-content-center social-icon"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#8A3E9D',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      fontSize: '18px'
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="#" 
                    className="d-flex align-items-center justify-content-center social-icon"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#8A3E9D',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      fontSize: '18px'
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="#" 
                    className="d-flex align-items-center justify-content-center social-icon"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#8A3E9D',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      fontSize: '18px'
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Add inline styles for hover effects */}
        <style>{`
          .form-control-dark:focus {
            background-color: rgba(255, 255, 255, 0.08) !important;
            border-color: #4ECDC4 !important;
            box-shadow: 0 0 0 0.2rem rgba(78, 205, 196, 0.15) !important;
            color: white !important;
          }
          .form-control-dark::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          .submit-btn:hover {
            background-color: #3db8b0 !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(78, 205, 196, 0.3);
          }
          .social-icon:hover {
            background-color: #B553B9 !important;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(181, 83, 185, 0.4);
          }
        `}</style>
      </div>
    </>
  )
}

export default Contact