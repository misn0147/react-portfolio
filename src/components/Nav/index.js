import React from "react";


function Nav(props) {
    const tabs = ["Home", "About", "Portfolio", "Contact"];

    return (
        <header className="flex-row">
        <h2>
            <a href="/react-portfolio/#home">Melissa Natoli</a>
        </h2>
        <nav className="flex-row">
            <ul className="nav-row">
                {tabs.map((tab) => (
                    <li className="mx-2" key={tab}>
                        <a
                            href={"#" + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab
                                    ? "navActive"
                                    : "mx-2"
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    );
}

export default Nav;
