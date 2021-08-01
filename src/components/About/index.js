import React from "react";
import myPhoto from "../../assets/melissa_pic.jpeg";
import myResume from "../../assets/Melissa-Natoli-Resume.docx";

function About() {
    return (
        <section className="my-5">
            <h1 className="titles">
                About Me
            </h1>
            <hr></hr>
            <div id="container">
                <div className="img-text-box"> 
                <img src={myPhoto} alt="Me" className="margin-block my-pic"/>
                <div className="my-2 margin-block">
                    <p>
                        I am a MERN Stack Developer holding a Bachelor of Science in Hospitality Management. I recently earned a certificate in Full Stack Development from the
                        University of Texas, An innovative problem-solver passionate about developing
                        apps, my current focus is on mobile-first design and development. 
                    </p>
                    <p>What I bring to every project:</p>
                    <ul>
                        <li>Problem-solving skills and perseverance</li>
                        <li>
                            Dedication to teamwork and flexible collaboration
                        </li>
                        <li>
                            Foundational knowledge of agile software development
                            principles
                        </li>
                        <li>
                            A curious mind and a desire to attack difficult
                            challenges
                        </li>
                    </ul>
                    <p>
                        When I'm not coding, I enjoy travelling the world, playing and watching sports, practicing the ukulele, and spending time with my two little dogs - Toby and Cheesepuff.
                    </p>
                </div>
                </div>
            </div>
            <div className="boxes">
                <h3 className="titles">My Technical Skills</h3>
                <ul>
                    <li>
                        <u>Programming Languages:</u> HTML, CSS, JavaScript
                    </li>
                    <li>
                        <u>Database Management:</u> MySQL, Sequelize, MongoDB,
                        Mongoose
                    </li>
                    <li>
                        <u>Libraries/Frameworks:</u> jQuery, React.js,
                        Express.js, Bootstrap, Materialize
                    </li>
                    <li>
                        <u>Other Technoloiges:</u> Node.js, Passport.js,
                        Handlebars, Git, Heroku, IndexedDB
                    </li>
                </ul>
                <a className="resume-button" href={myResume}><button>Download my Resume</button></a>
            </div>
        </section>
    );
}

export default About;
