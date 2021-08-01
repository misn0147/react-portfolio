import React, { useState } from "react";
import Nav from "../src/components/Nav";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Home from "../src/components/Home";


function App() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState("Home");
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };
    return (
        <div>
            <main>
                <header>
                <Nav
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
                </header>

                <div>{renderPage(currentPage)}</div>

            <footer>
                Melissa Natoli's React Portfolio © 2021
            </footer>
            </main>
        </div>
    );
}

export default App;
