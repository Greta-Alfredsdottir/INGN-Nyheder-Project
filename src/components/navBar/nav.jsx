import { useState } from 'react';
import { NavLink } from "react-router";
import style from './nav.module.scss';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return(
        <nav className={style.navStyling}>
            <section className={style.section}>INGN</section>
            {/* Hamburger button - kun synlig på mobile */}
            <button 
                className={style.hamburger} 
                onClick={toggleMenu}
                aria-label="Toggle menu">
            </button>

            {/* Navigation links */}
            <div className={`${style.navLinks} ${isOpen ? style.open : ''}`}>
                <NavLink to="/" onClick={() => setIsOpen(false)}>Alle</NavLink>
                <NavLink to="/indland" onClick={() => setIsOpen(false)}>Indland</NavLink>
                <NavLink to="/udland" onClick={() => setIsOpen(false)}>Udland</NavLink>
                <NavLink to="/teknologi" onClick={() => setIsOpen(false)}>Teknologi</NavLink>
                <NavLink to="/sport" onClick={() => setIsOpen(false)}>Sport</NavLink>
                <NavLink to="/politik" onClick={() => setIsOpen(false)}>Politik</NavLink>
                <NavLink to="/samfund" onClick={() => setIsOpen(false)}>Samfund</NavLink>
            </div>
        </nav>
    )
}