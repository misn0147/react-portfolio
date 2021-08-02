(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{21:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),r=s(16),i=s.n(r),l=(s(21),s(7)),n=s(0);var o=function(e){return Object(n.jsxs)("header",{className:"flex-row",children:[Object(n.jsx)("h2",{children:Object(n.jsx)("a",{href:"/react-portfolio/#home",children:"Melissa Natoli"})}),Object(n.jsx)("nav",{className:"flex-row",children:Object(n.jsx)("ul",{className:"nav-row",children:["Home","About","Portfolio","Contact"].map((function(t){return Object(n.jsx)("li",{className:"mx-2",children:Object(n.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"navActive":"mx-2",children:t})},t)}))})})]})},d=s.p+"static/media/melissa_pic.777da3c6.jpeg",j=s.p+"static/media/Melissa-Natoli-Resume.fec8a414.docx";var h=function(){return Object(n.jsxs)("section",{className:"my-5",children:[Object(n.jsx)("h1",{className:"titles",children:"About Me"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{id:"container",children:Object(n.jsxs)("div",{className:"img-text-box col",children:[Object(n.jsx)("div",{className:"img-box col-lg-4",children:Object(n.jsx)("img",{src:d,alt:"Me",className:"margin-block my-pic"})}),Object(n.jsxs)("div",{className:"my-2 margin-block col-lg-8",children:[Object(n.jsx)("p",{children:"I am a MERN Stack Developer holding a Bachelor of Science in Hospitality Management from Texas Tech University. I recently earned a certificate in Full Stack Development from the University of Texas. An innovative problem-solver passionate about developing apps, my current focus is on mobile-first design and development."}),Object(n.jsx)("p",{children:"What I bring to every project:"}),Object(n.jsxs)("ul",{className:"bullets",children:[Object(n.jsx)("li",{children:"Problem-solving skills and perseverance"}),Object(n.jsx)("li",{children:"Dedication to teamwork and flexible collaboration"}),Object(n.jsx)("li",{children:"Foundational knowledge of agile software development principles"}),Object(n.jsx)("li",{children:"A curious mind and a desire to attack difficult challenges"})]}),Object(n.jsx)("p",{children:"When I'm not coding, I enjoy travelling the world, playing and watching sports, practicing the ukulele, and spending time with my two little dogs - Toby and Cheesepuff."})]})]})}),Object(n.jsxs)("div",{className:"boxes",children:[Object(n.jsx)("h3",{className:"titles",children:"My Technical Skills"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("u",{children:"Programming Languages:"})," HTML, CSS, JavaScript"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("u",{children:"Database Management:"})," MySQL, Sequelize, MongoDB, Mongoose"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("u",{children:"Libraries/Frameworks:"})," jQuery, React.js, Express.js, Bootstrap, Materialize"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("u",{children:"Other Technoloiges:"})," Node.js, Passport.js, Handlebars, Git, Heroku, IndexedDB"]})]}),Object(n.jsx)("a",{className:"resume-button",href:j,children:Object(n.jsx)("button",{children:"Download my Resume"})})]})]})},b=s(10),m=s(15);var x=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1],j=s.name,h=s.email,x=s.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("Please enter your ".concat(e.target.name,"."));o||(a(Object(m.a)(Object(m.a)({},s),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",s))};return Object(n.jsxs)("section",{className:"my-5",children:[Object(n.jsx)("h1",{className:"titles",children:"Contact Me"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"boxes",children:Object(n.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",s)},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(n.jsx)("input",{type:"text",name:"name",placeholder:"John Smith",defaultValue:j,onBlur:u})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(n.jsx)("input",{type:"email",name:"email",placeholder:"john.smith@gmail.com",defaultValue:h,onBlur:u})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(n.jsx)("textarea",{name:"message",rows:"5",defaultValue:x,onBlur:u})]}),o&&Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"error-text",children:o})}),Object(n.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})}),Object(n.jsxs)("div",{className:"boxes",children:[Object(n.jsx)("h3",{className:"titles",children:"Let's talk"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"contacts",href:"tel:+15125895283",children:"512-589-5283"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"contacts",href:"mailto:missy_natoli@yahoo.com",children:"missy_natoli@yahoo.com"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"contacts",href:"https://github.com/misn0147",target:"_blank",rel:"noreferrer",children:"GitHub"})})]})]})]})},u=s(36),O=s(34),p=s(35),g=s(32),f=s(33),v=s.p+"static/media/pour-decisions.8e5eaac5.PNG",y=s.p+"static/media/meal_match.132994e8.JPG",k=s.p+"static/media/my_tech_blog.10c3882d.JPG",w=s.p+"static/media/Noted.2d600df2.JPG",N=s.p+"static/media/weather_dash.e05b4bb7.JPG",S=s.p+"static/media/workday_scheduler.2303808d.JPG";p.a.use([g.a,f.a]);var M=function(){return Object(n.jsxs)("section",{className:"my-5",children:[Object(n.jsx)("h1",{className:"titles",children:"My Work"}),Object(n.jsx)("hr",{}),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(u.a,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper",centeredSlides:!0,children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{class:"card mb-3",children:[Object(n.jsx)("a",{href:"https://pour-decisions.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{class:"card-img-top",src:v,alt:"pour decisions"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:"Pour Decisions"}),Object(n.jsx)("p",{class:"card-text",children:"Bootcamp group project created using Node.js, Express.js, Handlebars.js, MySQL2, and Sequelize as a review website for wineries in the Texas Hill Country."}),Object(n.jsx)("a",{href:"https://github.com/misn0147/pour-decisions",class:"btn btn-secondary btn-sm",children:"GitHub Repo"})]})]})}),Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{class:"card mb-3",children:[Object(n.jsx)("a",{href:"https://misn0147.github.io/meal_match/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{class:"card-img-top",src:y,alt:"meal match"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:"Meal Match\u2665"}),Object(n.jsx)("p",{class:"card-text",children:"Bootcamp group project created using JavaScript to randomly choose a food and drink pairing to help you have a fun and exciting date night."}),Object(n.jsx)("a",{href:"https://github.com/misn0147/meal_match",class:"btn btn-secondary btn-sm",children:"GitHub Repo"})]})]})}),Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{class:"card mb-3",children:[Object(n.jsx)("a",{href:"https://misn0147-my-tech-blog.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{class:"card-img-top",src:k,alt:"my tech blog"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:"My.Tech.Blog"}),Object(n.jsx)("p",{class:"card-text",children:"Blog website for users to blog about tech topics created using Express.js, Handlebars.jsn MySQL2, and Sequelize. Users can interact with the blog poster through comments on the blog."}),Object(n.jsx)("a",{href:"https://github.com/misn0147/my-tech-blog",class:"btn btn-secondary btn-sm",children:"GitHub Repo"})]})]})}),Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{class:"card mb-3",children:[Object(n.jsx)("a",{href:"https://misn0147-noted.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{class:"card-img-top",src:w,alt:"noted"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:"Noted"}),Object(n.jsx)("p",{class:"card-text",children:"Simple note taking application created using Express."}),Object(n.jsx)("a",{href:"https://github.com/misn0147/noted",class:"btn btn-secondary btn-sm",children:"GitHub Repo"})]})]})}),Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{class:"card mb-3",children:[Object(n.jsx)("a",{href:"https://misn0147.github.io/weather-dashboard/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{class:"card-img-top",src:N,alt:"Weather Dashboard"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:"Weather Dashboard"}),Object(n.jsx)("p",{class:"card-text",children:"Weather application that uses OpenWeather API to display current weather and upcoming forecast for any city searched."}),Object(n.jsx)("a",{href:"https://github.com/misn0147/weather-dashboard",class:"btn btn-secondary btn-sm",children:"GitHub Repo"})]})]})}),Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{class:"card mb-3",children:[Object(n.jsx)("a",{href:"https://misn0147.github.io/work-day-scheduler/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{class:"card-img-top",src:S,alt:"Workday Scheduler"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:"Workday Scheduler"}),Object(n.jsx)("p",{class:"card-text",children:"Calendar application where you can log daily tasks and save them. The color of the task changes as the workday progresses."}),Object(n.jsx)("a",{href:"https://github.com/misn0147/work-day-scheduler",class:"btn btn-secondary btn-sm",children:"GitHub Repo"})]})]})})]})})]})},P=s(11);var _=function(){return Object(n.jsx)("section",{className:"hero",children:Object(n.jsxs)("div",{className:"social-line",children:[Object(n.jsx)("h1",{className:"titles",children:Object(n.jsx)("u",{children:"Melissa Natoli"})}),Object(n.jsx)("h2",{className:"titles",children:"Austin, Texas based Web Developer"}),Object(n.jsxs)("div",{className:"socials",children:[Object(n.jsx)("div",{children:Object(n.jsx)(P.SocialIcon,{url:"https://www.linkedin.com/in/melissa-natoli-4807b63a/",target:"_blank"})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.SocialIcon,{url:"https://github.com/misn0147",target:"_blank"})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.SocialIcon,{url:"https://soundcloud.com/user-693992123",target:"_blank"})})]})]})})};var H=function(){var e=Object(c.useState)("Home"),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("main",{children:[Object(n.jsx)("header",{children:Object(n.jsx)(o,{currentPage:s,handlePageChange:a})}),Object(n.jsx)("div",{children:function(){switch(s){case"About":return Object(n.jsx)(h,{});case"Portfolio":return Object(n.jsx)(M,{});case"Contact":return Object(n.jsx)(x,{});default:return Object(n.jsx)(_,{})}}()}),Object(n.jsx)("footer",{children:"Melissa Natoli's React Portfolio \xa9 2021"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.876cc7d3.chunk.js.map