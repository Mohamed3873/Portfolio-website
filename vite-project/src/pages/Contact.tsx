import "../styles/contact.css"; // Assuming you have a CSS file for styling

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <label className="form-label">
          Name:
          <input type="text" name="name" required className="form-input" />
        </label>
        <label className="form-label">
          Email:
          <input type="email" name="email" required className="form-input" />
        </label>
        <label className="form-label">
          Message:
          <textarea name="message" required className="form-textarea" />
        </label>
        <button type="submit" className="form-button">Send</button>
      </form>
    </section>
  );
}

export default Contact;
