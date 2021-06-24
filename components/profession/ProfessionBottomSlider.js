import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Positions from '../common/Positions';

function ProfessionBottomSlider({ profession, professions }) {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const handleDragStart = (e) => e.preventDefault();
  const parsedProfessions = JSON.parse(professions)[0];
  console.log(parsedProfessions);
  const items = [];
  parsedProfessions?.forEach((profession1) => {
    items.push(
      <Positions
        className="px-4"
        jobTitle={profession1.title}
        isButton
        description={profession1.text}
      />
    );
  });
  //   const getProfessions = () => {
  //   };

  //   const items = [
  //     <Positions
  //       jobTitle="בוב"
  //       description="asdfasdfasdfasdfasdfsadf sadf asdf sadf asdf sadfasdfasddfasd asexcd df dfgh fghjytu nbdfgh sfdghdfjyuuiertyw ertwe ewr"
  //     >
  //       1
  //     </Positions>,
  //     <Positions>2</Positions>,
  //     <Positions>3</Positions>,

  //     // <div onDragStart={handleDragStart}>3</div>,
  //   ];

  return (
    // <div className="w-full">
    <AliceCarousel
      responsive={responsive}
      disableDotsControls
      mouseTracking={false}
      items={items}
    />
    // </div>
  );
}

export default ProfessionBottomSlider;
