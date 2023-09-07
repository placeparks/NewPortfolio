// MainSection.js
import React from 'react';
import SocialProfileWithImageHorizontal from './About';  // Replace with your actual About component import
import Tech from './Tech/Tech';  // Replace with your actual Tech component import

const MainSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '20%' }}>
        <Tech />  {/* Left-side tech section */}
      </div>
      <div style={{ width: '60%' }}>
        <SocialProfileWithImageHorizontal />  {/* Center about section */}
      </div>
      <div style={{ width: '20%' }}>
        <Tech />  {/* Right-side tech section */}
      </div>
    </div>
  );
};

export default MainSection;
