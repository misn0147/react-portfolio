import React from "react";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Melissa Natoli
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
                        <a href="#about" onClick={() => setContactSelected(false)}>About me</a>
                    </li>
                    <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
                        <a href="#projects" onClick={() => setContactSelected(false)}>My Work</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href="#contact" onClick={() => setContactSelected(true)}>Contact Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
