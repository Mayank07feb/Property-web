import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="mb-0">
              &copy; 2048 Villa Agency Co., Ltd. All rights reserved.
              <br />
              Design by{' '}
              <a
                className="text-info"
                href="#"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Mayank Sharma
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
