import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        GDC "Global Developers Communtiy" is based on {' '}
        <a href='https://dev.to/' className='hvr-underline'>
          DEV.to
        </a>{' '}
        (A constructive and inclusive social network for software developers)
      </p>
      <p>
        Made with love by{' '}
        <a href='https://github.com/abcdeCoder' className='hvr-underline'>
        Gaurav Verma
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
