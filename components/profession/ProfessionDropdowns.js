/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import WhitePen from '../svg/WhitePen';
import WhiteEarth from '../svg/WhiteEarth';
import Arrow from '../svg/Arrow';

function ProfessionDropdowns({ profession }) {
  console.log(profession);
  return (
    <section className=" relative max-w-[812px] w-full">
      <ul id="professionDropdown">
        {profession.whatToDoWithIt
          ? profession.whatToDoWithIt.map((x) => (
            <Acordion key={x.title} title={x.title} text={x.text} />
          ))
          : null}
        {/* <Acordion
          title="מה עושים עם זה"
          text={profession?.whatToDoWithIt[0].text ? profession.whatToDoWithIt[0].text : ''}
        />
        <Acordion
          title="מה עושים עם זה"
          text={profession?.whatToDoWithIt[0].text ? profession.whatToDoWithIt[0].text : ''}
        />
        <Acordion
          title="מה עושים עם זה"
          text={profession?.whatToDoWithIt[0].text ? profession.whatToDoWithIt[0].text : ''}
        /> */}
      </ul>
    </section>
  );
}
const Acordion = ({ text, title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className={`acordion ${isActive ? 'isActive' : ''}`}>
      <button
        className=" font-extrabold text-xl leading-6"
        type="button"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="inline-block">
          <CheckForTitle title={title} />
          {title}
        </div>
        <div className={isActive ? 'inline-block -rotate-90' : 'inline-block rotate-90'}>
          <Arrow />
        </div>
      </button>
      <div className="submenu">{text}</div>
    </li>
  );
};

const CheckForTitle = ({ title }) => {
  let classes = '';
  switch (title) {
    case 'מה עושים עם זה?':
      classes = <WhitePen />;
      break;
    case 'מערכי עבודה':
      classes = <WhiteEarth />;
      break;
    case 'סביבות עבודה':
      classes = <WhitePen />;
      break;
    case 'דרישות אישיות':
      classes = <WhiteEarth />;
      break;
    default:
      break;
  }
  return classes;
};

export default ProfessionDropdowns;
