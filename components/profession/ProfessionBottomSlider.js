import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CategoryWithHeart from '../common/CategoryWithHeart';

function ProfessionBottomSlider({ professions }) {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  if (!professions || !Array.isArray(professions)) {
    return null;
  }
  const items = professions.map((profession1) => (
    <CategoryWithHeart
      value={profession1.title}
      isButton
      description={profession1.description}
      id={profession1.id}
      type="professions"
      className="px-0"
    />
  ));

  return (
    <div className="mt-16">
      <div className="text-2xl font-bold leading-6 mb-6 pr-[6px] ">
        עוד מקצועות שיכולות להתאים לך
      </div>
      <AliceCarousel
        responsive={responsive}
        disableDotsControls
        mouseTracking={false}
        items={items}
        infinite
      />
    </div>
  );
}

export default ProfessionBottomSlider;
