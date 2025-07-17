import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span>mohamed@example.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </div>
              <span>Available for freelance work</span>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="form-input"
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                name="message" 
                required 
                className="form-textarea"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button type="submit" className="form-button">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22,2 15,22 11,13 2,9 22,2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;