import React from 'react';
import "./skill.css"

import html from "../asset/html.png"
import css from "../asset/css.png"
import node from "../asset/node.png"
import mongo from "../asset/mongo.png"
import react from "../asset/react.png"
import js from "../asset/js.png"

const Skills = () => {
  return (
    <div>
      <div className='flex justify-center text-4xl mt-9  skill'>Skills</div>
      <hr />
    <div id="skill" className="flex flex-wrap justify-center">
      <div className="w-1/3 p-4">
        <img src={html} alt="HTML5" className="skills-image animate-pulse flex mx-auto" />
        <p className="text-center font-bold text-xl">HTML5</p>
      </div>
      <div className="w-1/3 p-4">
        <img src={css} alt="CSS3" className="skills-image animate-pulse mx-auto" />
        <p className="text-center font-bold text-xl">CSS</p>
      </div>
      <div className="w-1/3 p-4">
        <img src={mongo} alt="JavaScript" className="skills-image animate-pulse mx-auto" />
        <p className="text-center font-bold text-xl">Mongo DB</p>
      </div>
      <div className="w-1/3 p-4">
        <img src={react} alt="" className="skills-image animate-pulse mx-auto" />
        <p className="text-center font-bold text-xl">React</p>
      </div>
      <div className="w-1/3 p-4">
        <img src={node} alt="Node.js" className="skills-image animate-pulse mx-auto" />
        <p className="text-center font-bold text-xl">Node.js</p>
      </div>
      <div className="w-1/3 p-4">
        <img src={js} alt="js" className="skills-image animate-pulse mx-auto" />
        <p className="text-center font-bold text-xl">JavaScript</p>
      </div>
    </div>
    </div>
  );
};

export default Skills;
