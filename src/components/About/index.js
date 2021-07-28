import React from "react";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Nice to meet you!</h1>
            {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
            <div className="my-2">
                <p>
                    I am an aspiring Back End Web Developer holding a Bachelor of Science in Hospitality Management. I recently earned a certificate in Full Stack Development from the University of Texas, where I  developed skills in JavaScript, NoSQL (MongoDB), SQL, and more. An innovative problem-solver passionate about developing apps, my current focus is on mobile-first design and development.
                </p>
                <p>
                    I bring the following to every project:
                </p>
                <ul>
                    <li>Problem-solving skills and perseverance</li>
                    <li>Dedication to teamwork and flexible collaboration</li>
                    <li>Foundational knowledge of agile software development principles</li>
                    <li>A curious mind and a desire to attack difficult challenges</li>
                </ul>
                <p>
                    I’m excited to leverage my skills as part of a fast-paced, quality-driven team. Let’s connect!
                </p>
            </div>
        </section>
    );
}

export default About;
