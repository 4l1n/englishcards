import React from "react"
import logo from './cartas/logo.webp';
function Header() {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p>English Cards</p>
        </header>
    )
}

export default Header