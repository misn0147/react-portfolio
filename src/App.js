import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import ReactDOM from 'react-dom';

import { SocialIcon } from 'react-social-icons';


function App() {
    const [contactSelected, setContactSelected] = useState(false);
    return (
        <div>
            <Nav
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {!contactSelected ? (
                    <>
                        <About></About>
                    </>
                ) : (
                    <ContactForm></ContactForm>
                )}
                <footer>
                <SocialIcon url="https://www.linkedin.com/in/melissa-natoli-4807b63a/" target="_blank" />
                <SocialIcon url="https://github.com/misn0147" target="_blank"/>
                <SocialIcon url="https://soundcloud.com/user-693992123" target="_blank"/>
                </footer>
            </main>
        </div>
    );
}

export default App;
