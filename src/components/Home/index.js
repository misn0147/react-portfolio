import React from "react";
import { SocialIcon } from "react-social-icons";


function Home() {
    return (
        <section class="hero">
            
            <div className="social-line">
            <h1 className="titles">Austin, Texas based Web Developer</h1>
                <div className="socials">
                    <div>
                        <SocialIcon
                            url="https://www.linkedin.com/in/melissa-natoli-4807b63a/"
                            target="_blank"
                        />
                    </div>
                    <div>
                        <SocialIcon
                        url="https://github.com/misn0147"
                        target="_blank"
                    />
                    </div>
                    <div>
                        <SocialIcon
                            url="https://soundcloud.com/user-693992123"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
