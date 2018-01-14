import React from 'react';

const Footer = (props) => {
  const { gitUrl } = props;
  return (
    <footer className="footer-container">
      <p className="footer-text">Source code available on <a target="blank" href={gitUrl}>Github</a></p>
    </footer>
  )
}

export default Footer
