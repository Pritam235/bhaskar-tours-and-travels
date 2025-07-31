function Contact(){
    return(
        <div className="contact-section">
           <h1>Contact Us</h1>
           <p>Have questions or ready to book your next adventure? We’d love to help!</p>

           <p><strong>📍 Office Address:</strong><br/>
           Bhaskar Tours & Travels,<br/>
           Belagavi, Karnataka, India</p>

           <p><strong>📞 Phone:</strong> +91-9148637747</p>
           <p><strong>📧 Email:</strong> support:bhaskartoursandtravels926@gmail.com</p>

           <p>Or fill out the form below and our team will get back to you shortly.</p>

           <form className="contact-form">
             <input type="text" placeholder="Your Name" name="name" required />
             <input type="email" placeholder="Your Email" name="email" required />
             <textarea placeholder="Your Message" name="message" required />
             <button type="submit">Send Message</button>
           </form>
        </div>
    )
}
export default Contact;
