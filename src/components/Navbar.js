import React from "react";
import Logo from "../images/logo.svg";
import Icon from "../images/explore.svg";
import "../Navbar.css";
import {Navbar} from "flowbite-react"

const NavbarComponent = () => {
    return (
            <Navbar
                style={{color: "#F2C917", background: "transparent"}}
                fluid={true}
                rounded={false}
            >
                <Navbar.Brand href="#">
                    <img alt="logo" src={Logo} width={194} height={64} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#"><a className="item text-dblue mr-8 font-bold text-sm" href="#">Sobre nós</a></Navbar.Link>
                    <Navbar.Link href="#"><a className="item text-dblue mr-8 font-bold text-sm" href="#">Soluções</a></Navbar.Link>
                    <Navbar.Link href="#"><a className="item text-dblue mr-8 font-bold text-sm" href="#">Vagas</a></Navbar.Link>
                    <Navbar.Link href="#"><a className="item text-dblue mr-8 font-bold text-sm" href="#">Fale Conosco</a></Navbar.Link>
                    <Navbar.Link href="#"><a className="item text-dblue mr-8 font-bold text-sm flex items-center" href="#"><img className="h-5 w-5" src={Icon} /> Idioma</a></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavbarComponent;