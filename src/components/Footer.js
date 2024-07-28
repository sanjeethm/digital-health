import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Information</h5>
            <p>
              Address: 123 Main St, City, Country
              <br />
              Phone: +1 234 567 890
              <br />
              Email: info@thryvedigital.com
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">Home</a>
              </li>
              <li>
                <a href="/about-us" className="text-dark">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-dark">Services</a>
              </li>
              <li>
                <a href="/solutions" className="text-dark">Solutions</a>
              </li>
              <li>
                <a href="/contact" className="text-dark">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; 2024 Thryve Digital
      </div>
    </footer>
  );
};

export default Footer;
