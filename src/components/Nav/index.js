import React from "react";

function Nav(props) {
    //   const {
    //     categories = [],
    //     setCurrentCategory,
    //     currentCategory,
    //     contactSelected,
    //     setContactSelected
    //   } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Melissa Natoli
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#projects">My Work</a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">Contact Me</a>
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
