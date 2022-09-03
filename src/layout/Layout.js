import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const Layout = ({children}) => {
    return (
        <Container>
            <Navbar/>
            <main>
                {children}
            </main>
        </Container>
    )
}

export default Layout;