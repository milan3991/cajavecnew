import { useState } from "react";
import { Link } from "react-router-dom";
import './navigation.style.css';
import logo from '../../assets/logo.png';
import burgerIcon from '../../assets/burger.svg';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                <span><Link to="/">КУД Чајавец</Link></span>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>

                <button className={`burger ${menuOpen ? 'rotate' : ''}`} onClick={toggleMenu}>
                    <img src={burgerIcon} alt="Burger menu" />
                </button>
                <nav className={`navigation_list ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Почетна</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>Историјат</Link>
                    <Link to="/works" onClick={() => setMenuOpen(false)}>Секције</Link>
                    <Link to="/gallery" onClick={() => setMenuOpen(false)}>Галерија</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Контакт</Link>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;