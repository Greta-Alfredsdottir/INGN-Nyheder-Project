import { NavLink } from "react-router";
import style from './nav.module.scss';

export function Navbar() {
    return(
       
        <nav className={style.navStyling}>
            <section className={style.section}>INGN</section>
            {/* Altid kalde det "NavLink" når "Link" bruges i navbar */}
            <div>
                <NavLink to="/">Alle</NavLink>
                <NavLink to="/indland">Indland</NavLink>
                <NavLink to="/udland">Udland</NavLink>
                <NavLink to="/teknologi">Teknologi</NavLink>
                <NavLink to="/sport">Sport</NavLink>
                <NavLink to="/politik">Politik</NavLink>
                <NavLink to="/samfund">Samfund</NavLink>
            </div>
        </nav>
        
    )
}