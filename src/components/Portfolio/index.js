import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

//project photos
import pourDecisions from "../../assets/pour-decisions.PNG";
import mealMatch from "../../assets/meal_match.JPG";
import techBlog from "../../assets/my_tech_blog.JPG";
import notedPic from "../../assets/Noted.JPG";
import weatherApp from "../../assets/weather_dash.JPG";
import workdayPic from "../../assets/workday_scheduler.JPG";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Portfolio() {
    return (
        <section className="my-5">
            <h1 className="titles">
                My Work
            </h1>
            <hr></hr>
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                centeredSlides={true}
            >
                <SwiperSlide>
                    <div className="card mb-3">
                        <a
                            href="https://pour-decisions.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="card-img-top"
                                src={pourDecisions}
                                alt="pour decisions"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Pour Decisions</h5>
                            <p className="card-text">
                                Bootcamp group project created using Node.js, Express.js, Handlebars.js, MySQL2, and Sequelize as a review website for wineries in the Texas Hill Country.
                            </p>
                            <a
                                href="https://github.com/misn0147/pour-decisions"
                                className="btn btn-secondary btn-sm"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                        <a
                            href="https://misn0147.github.io/meal_match/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="card-img-top"
                                src={mealMatch}
                                alt="meal match"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Meal Match♥</h5>
                            <p className="card-text">
                                Bootcamp group project created using JavaScript to randomly choose a food and drink pairing to help you have a fun and exciting date night.
                            </p>
                            <a
                                href="https://github.com/misn0147/meal_match"
                                className="btn btn-secondary btn-sm"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                        <a
                            href="https://misn0147-my-tech-blog.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="card-img-top"
                                src={techBlog}
                                alt="my tech blog"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">My.Tech.Blog</h5>
                            <p className="card-text">
                                Blog website for users to blog about tech topics created using Express.js, Handlebars.jsn MySQL2, and Sequelize. Users can interact with the blog poster through comments on the blog.
                            </p>
                            <a
                                href="https://github.com/misn0147/my-tech-blog"
                                className="btn btn-secondary btn-sm"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                        <a
                            href="https://misn0147-noted.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="card-img-top" 
                            src={notedPic} 
                            alt="noted"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Noted</h5>
                            <p className="card-text">
                                Simple note taking application created using Express.
                            </p>
                            <a
                                href="https://github.com/misn0147/noted"
                                className="btn btn-secondary btn-sm"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                        <a
                            href="https://misn0147.github.io/weather-dashboard/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="card-img-top" 
                            src={weatherApp} 
                            alt="Weather Dashboard"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">
                                Weather application that uses OpenWeather API to display current weather and upcoming forecast for any city searched. 
                            </p>
                            <a
                                href="https://github.com/misn0147/weather-dashboard"
                                className="btn btn-secondary btn-sm"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                        <a
                            href="https://misn0147.github.io/work-day-scheduler/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="card-img-top" 
                            src={workdayPic} 
                            alt="Workday Scheduler"
                            />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Workday Scheduler</h5>
                            <p className="card-text">
                                Calendar application where you can log daily tasks and save them. The color of the task changes as the workday progresses. 
                            </p>
                            <a
                                href="https://github.com/misn0147/work-day-scheduler"
                                className="btn btn-secondary btn-sm"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
        </section>
    );
}

export default Portfolio;
