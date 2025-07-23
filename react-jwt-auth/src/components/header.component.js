// components/header.components.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const Header = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        AuthService.logout();
        navigate('/login');
    };

    return (
        <header>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="30 Years Logo" style={{height: "40px"}} />
                Академия Гражданской Авиации
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home" style={{color: "white", textDecoration: "none"}}>Домой</Link>
                    </li>
                    <li>Техподдержка</li>
                    <li className="notification">
                        <button id="taskBell" className="bell-button">
                            🔔
                            <span id="taskCount" className="badge">3</span>
                        </button>
                    </li>
                    {user && (
                        <>
                            <li style={{color: "white", marginRight: "10px"}}>{user.name}</li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="logout-button"
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid white',
                                        color: 'white',
                                        padding: '5px 15px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = 'white';
                                        e.target.style.color = '#002c6a';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = 'white';
                                    }}
                                >
                                    Выйти
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;