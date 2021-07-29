import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CategoryWithHeart from './CategoryWithHeart';

function StudyBottomSlider({ studies }) {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };
  // console.log(professions[0].id);
  if (!studies || !Array.isArray(studies)) {
    return null;
  }
  const items = studies.map((study) => (
    <CategoryWithHeart
      value={study.title}
      isButton
      description={study.description}
      id={study.id}
      type="studies"
      className="px-0 "
      company={study.company}
    />
  ));

  return (
    <div className="col-start-1 col-end-4 mt-16">
      <div className="text-2xl font-bold leading-6 mb-6 pr-[6px] ">
        עוד מסלולי לימודי שיכולים להתאים לך
      </div>
      <AliceCarousel
        mouseTracking
        disableDotsControls
        items={items}
        responsive={responsive}
        infinite
      />
    </div>
  );
}

export default StudyBottomSlider;
