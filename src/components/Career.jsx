// Career.js

import React from 'react';
import CareerCard from './CareerCard';

const Career = () => {
  // Define content for each card
  const card1Content = ["Card 1 content 1", "Card 1 content 2", "Card 1 content 3"];
  const card2Content = ["Card 2 content 1", "Card 2 content 2", "Card 2 content 3"];
  const card3Content = ["Card 3 content 1", "Card 3 content 2", "Card 3 content 3"];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <CareerCard
            title="Java Full Stack Development Course"
            imageSrc="../src/assets/Career/Card1.webp"
            button1Text="ENGLISH"
            button2Text="TAMIL"
          />
        </div>
        <div className="col">
          <CareerCard
            title="UI/UX Design course"
            imageSrc="../src/assets/Career/Card4.webp"
            button1Text="ENGLISH"
            button2Text="TAMIL"
          />
        </div>
        <div className="col">
          <CareerCard
            title="Data Science Course"
            imageSrc="../src/assets/Career/Card3.webp"
            button1Text="ENGLISH"
            button2Text="TAMIL"
          />
        </div>
      </div>
    </div>
  );
}

export default Career;
