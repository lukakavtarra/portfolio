import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img/portfolio1.jpg";
import IMG2 from "../../assets/img/portfolio2.jpg";
import IMG3 from "../../assets/img/portfolio3.jpg";
import MONSTERS from "../../assets/img/monstersrolodex.png";
import IMG5 from "../../assets/img/portfolio5.png";
import IMG6 from "../../assets/img/portfolio6.jpg";
import countriesList from "../../assets/img/countrieslist.png";
import Possolution from "../../assets/img/possolution.png";
import Aiparts from "../../assets/img/Aiparts.png";
const data = [
  {
    id: 1,
    image: Possolution,
    title: "Possolution / Software for restaurants",
    github: "#",
    demo: "https://possolutions.ge/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather App Made With Openweathermap API",
    github: "https://github.com/lukakavtarra/weather",
    demo: "https://lukakavtarra.github.io/weather/",
  },
  {
    id: 3,
    image: MONSTERS,
    title: "React App / Monsters Rolodex Application",
    github: "https://github.com/lukakavtarra/monsters-rolodex",
    demo: "https://lukakavtarra.github.io/monsters-rolodex/",
  },
  {
    id: 4,
    image: countriesList,
    title: "Countries List / REST Countries API with color theme switcher",
    github: "https://github.com/lukakavtarra/countries-list",
    demo: "https://lukakavtarra.github.io/countries-list/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Expencses app (needs node.js which is include in readme)",
    demo: "https://lukakavt.github.io/expenses-front/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Responsive FAQ card / CHALLENGE HUB",
    github: "https://github.com/lukakavtarra/FAQ-accordion-card-challenge-hub",
    demo: "https://lukakavtarra.github.io/FAQ-accordion-card-challenge-hub/",
  },
  {    id: 7,
    image: IMG1,
    title: "Redberry Project / Redberry-Knight-Cup",
    github: "https://github.com/lukakavtarra/Redberry-Knight-Cup",
    demo: "https://main--luxury-donut-2d9a0a.netlify.app/",
  },
    {    id: 8,
      image: Aiparts,
      title: "Aiparts / Wordpress Project",
      github: "#",
      demo: "https://github.com/lukakavtarra/Redberry-Knight-Cup"}
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github !== "#" && (
                  <a href={github} className="btn" target="_blank">
                  Github
                </a>    
                )}
                <a href={demo} className="btn btn-primary" target="_blank">
                Live
              </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
