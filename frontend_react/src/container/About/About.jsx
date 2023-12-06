import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {images} from "../../constants";

import './About.scss'

const abouts = [
  {title: "Web Development", description: "I am a good web developer.", imgUrl: images.about07, imgAttributionDescription: "Image by pikisuperstar", imgAttributionWebsite: "on Freepik"},
  {title: "Test Automation", description: "I am a good web developer.", imgUrl: images.about05, imgAttributionDescription: "Image by storyset", imgAttributionWebsite: "on Freepik"},
  {title: "Backend Development", description: "I am a good web developer.", imgUrl: images.about04, imgAttributionDescription: "Image by pikisuperstar", imgAttributionWebsite: "on Freepik"},
  {title: "Software Engineering", description: "I am a good web developer.", imgUrl: images.about04, imgAttributionDescription: "Image by pikisuperstar", imgAttributionWebsite: "on Freepik"}
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know That<span> Good Apps</span><br /> Means <span>Good Experience</span></h2>

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type: "tween"}}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <p className="p-text" style={{marginTop: 5}}>{about.imgAttributionDescription} {about.imgAttributionWebsite}</p>
              <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
              <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))}
        </div>
    </>
  )
}

export default About