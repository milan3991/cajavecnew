import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './navigation.style.css';
import logo from '../../assets/logo.png';
import burgerIcon from '../../assets/burger.svg';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // Zatvaranje menija klikom van nav i burger dugmeta
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                <span><Link to="/">КУД Чајавец</Link></span>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>

                <button
                    ref={burgerRef}
                    className={`burger ${menuOpen ? 'rotate' : ''}`}
                    onClick={toggleMenu}
                >
                    <img src={burgerIcon} alt="Burger menu" />
                </button>

                <nav ref={navRef} className={`navigation_list ${menuOpen ? 'open' : ''}`}>
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
