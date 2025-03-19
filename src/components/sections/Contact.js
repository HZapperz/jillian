import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Show submitting state
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>jillian.hohman@example.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Find Me On</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/jillianhohman" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faDribbble} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn submit-btn ${formStatus.submitting ? 'submitting' : ''}`}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.submitted && (
                <div className="form-success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus.error && (
                <div className="form-error-message">
                  An error occurred. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 