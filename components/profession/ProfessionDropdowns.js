/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import WhitePen from '../svg/WhitePen';
import WhiteEarth from '../svg/WhiteEarth';
import Arrow from '../svg/Arrow';

function ProfessionDropdowns({ profession }) {
  return (
    <section className=" relative max-w-[812px] w-full">
      <ul id="professionDropdown">
        {profession.info && Object.entries(profession.info).map(([key, info]) => (
          <Acordion key={key} title={info.title} text={info.text} id={info.id} />
        ))}
      </ul>
    </section>
  );
}
const Acordion = ({ text, title, id }) => {
  const [isActive, setIsActive] = useState(false);
  if (!text) return null;
  return (
    <li className={`acordion ${isActive ? 'isActive' : ''}`}>
      <button
        className=" font-extrabold text-xl leading-6"
        type="button"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="inline-block acodrion-svg">
          <CheckForTitle id={id} />
          <span>
            {title}
          </span>
        </div>
        <div className={`w-6 h-6 flex items-center justify-center transition ${isActive ? 'rotate-180' : ''}`}>
          <Arrow />
        </div>
      </button>
      <div className="submenu" dangerouslySetInnerHTML={{ __html: text }} />
    </li>
  );
};

const CheckForTitle = ({ id }) => {
  let classes = <WhitePen />;
  switch (id) {
    case 'mikExampleTeur':
      classes = <WhitePen />;
      break;
    case 'moreInfoTeur':
      classes = <WhiteEarth />;
      break;
    case 'jobsTeur':
      classes = <WhitePen />;
      break;
    case 'personalDemandsTeur':
      classes = <WhiteEarth />;
      break;
    default:
      classes = <WhitePen />;
      break;
  }
  return classes;
};

export default ProfessionDropdowns;
