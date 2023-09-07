import React from 'react';
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "./constants";

const Tech = () => {
  return (
    <div id='tech' style={{padding:"11vh"}}>
      <h1 className="text-center mb-4 text-white">Technologies</h1>
      
      <div className="row row-cols-1 row-cols-md-5 justify-content-center">
        {technologies.map((technology) => (
          <div className="col" key={technology.name}>
            <div className="w-100 h-100">
              <BallCanvas icon={technology.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
