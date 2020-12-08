import react from "react";
import { HeaderStyle } from "../style/css";
import { Link } from "react-scroll";

export default class Header extends react.Component {
    render() {
        return (
            <HeaderStyle>
                {/* <img src="https://www.flaticon.com/svg/static/icons/svg/499/499870.svg" alt=""/> */}
                <Link to="welcome" smooth={true} duration={1000}>Inicio</Link>
                <Link to="service" smooth={true} duration={1000}>Servicios</Link>
                <Link to="contact" smooth={true} duration={1000}>Contacto</Link>
                <Link to="" smooth={true} duration={1000}>Admin</Link>
            </HeaderStyle>
        )
    }
}