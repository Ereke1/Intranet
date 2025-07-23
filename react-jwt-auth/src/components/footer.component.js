// components/footer.component.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/school/civil-aviation-academy/' },
        { name: 'Facebook', url: 'https://www.facebook.com/CivilAviationAcademy' }
    ];

    return (
        <footer>
            <div className="footer-content">
                <p>
                    © {currentYear} Civil Aviation Academy {' '}
                    {socialLinks.map((social, index) => (
                        <React.Fragment key={social.name}>
                            {index > 0 && ' | '}
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    marginLeft: '5px'
                                }}
                                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                            >
                                {social.name}
                            </a>
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </footer>
    );
};

export default Footer;