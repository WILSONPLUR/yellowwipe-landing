import React from "react";
import "../Footer.css";
import Logo from "../images/light-logo.svg";
import Container from "./Container";
import Icon from "../images/explore.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer pb-10">
            <Container>
                <div className="footer__content flex flex-col items-center xxl:after:content-[''] xxl:after:h-0.5 xxl:after:bg-dblue after:opacity-20 xxl:after:min-w-full" >
                    <img src={Logo} className="pt-7 pb-7" />
                    <nav className="flex psm:hidden xxl:pb-10 xxl:flex-row xxl:justify-between xxl:items-center psm:flex-col psm:items-center psm:justify-center">
                        <a className="nav-item text-dblue xxl:mr-8 psm:mr-0 font-bold text-sm" href="#">Sobre nós</a>
                        <a className="nav-item text-dblue xxl:mr-8 psm:mr-0 font-bold text-sm" href="#">Soluções</a>
                        <a className="nav-item text-dblue xxl:mr-8 psm:mr-0 font-bold text-sm" href="#">Vagas</a>
                        <a className="nav-item text-dblue xxl:mr-8 psm:mr-0 font-bold text-sm" href="#">Fale Conosco</a>
                        <a className="nav-item text-dblue xxl:mr-8 psm:mr-0 font-bold text-sm xxl:flex xxl:items-center" href="#"><span><img className="h-5 w-5" src={Icon} /></span> Idioma</a>
                    </nav>
                </div>
                <div className="flex psm:flex-col justify-between items-center mt-7">
                    <div>
                        <h3 className="text-white text-sm font-medium">
                            &copy; 2021 YELLOWIPE
                        </h3>
                    </div>
                    <div className="w-36 flex justify-between">
                        <a href="#" className="bg-lightyellow h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="h-7 w-7" color="white" icon="fa-brands fa-instagram" />
                        </a>
                        <a href="#" className="bg-lightyellow h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="h-7 w-7" color="white" icon="fa-brands fa-dribbble"/>
                        </a>
                        <a href="#" className="bg-lightyellow h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="h-7 w-7" color="white" icon="fa-brands fa-twitter" />
                        </a>
                        <a href="#" className="bg-lightyellow h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="h-7 w-7" color="white" icon="fa-brands fa-youtube" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;