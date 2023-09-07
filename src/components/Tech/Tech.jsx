import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "./constants";
import React, { useEffect, useState } from 'react';
import { useAboutRef } from '../AboutRefContext';  // Import the custom hook

const Tech = () => {
  const aboutRef = useAboutRef();  // Use the custom hook
  const [aboutPosition, setAboutPosition] = useState({});

  useEffect(() => {
    if (aboutRef.current) {
      setAboutPosition(aboutRef.current.getBoundingClientRect());
    }
  }, [aboutRef]);
  return (
<div style={{
      position: 'absolute',
      top: aboutPosition.top,
      left: aboutPosition.left,
      right: aboutPosition.right
    }}>

      <div className="row row-cols-1 row-cols-md-5 justify-content-center gx-0 gy-2">
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
