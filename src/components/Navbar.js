import React, {useRef, useState} from "react";
import Logo from "../images/logo.svg";
import Icon from "../images/explore.svg";
import MenuIcon from "../images/menu.svg";
import "../Navbar.css";
import {Navbar} from "flowbite-react"
import {NavbarBrand} from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";

const NavbarComponent = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const handleOpenMenu = () => {
        setIsOpenMenu((prev) => !prev);
    }
    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '20px',
            right: '10px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#FDC21D',
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            display: "flex",
            flexDirection: "column",
            height: '100%'
        },
        bmMenu: {
            background: '#fff',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em',
        },
        bmItem: {
            display: 'inline-flex'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }
    return (
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="#">
                    <img src={Logo} width={194} height={64} />
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
        /*<nav className="2xl:flex 2xl:items-center 2xl:justify-between 2xl:mt-8">*/
            /*<div className="flex justify-between items-center">
                <a href="#"><img src={Logo} width={194} height={64} /></a>
            </div>
            <nav className="2xl:flex xl:flex lg:flex md:hidden" id="menu">
                <a className="item text-dblue mr-8 font-bold text-sm" href="#">Sobre nós</a>
                <a className="item text-dblue mr-8 font-bold text-sm" href="#">Soluções</a>
                <a className="item text-dblue mr-8 font-bold text-sm" href="#">Vagas</a>
                <a className="item text-dblue mr-8 font-bold text-sm" href="#">Fale Conosco</a>
                <a className="item text-dblue mr-8 font-bold text-sm flex items-center" href="#"><span><img className="h-5 w-5" src={Icon} /></span> Idioma</a>
            </nav>*/
       /* </nav>*/
    )
}

export default NavbarComponent;