import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CategoryWithHeart from '../common/CategoryWithHeart';

function ProfessionBottomSlider({ userToken, professions }) {
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
      token={userToken}
    />
  ));

  return (
    <AliceCarousel
      responsive={responsive}
      disableDotsControls
      mouseTracking={false}
      items={items}
      infinite
    />
  );
}

export default ProfessionBottomSlider;
