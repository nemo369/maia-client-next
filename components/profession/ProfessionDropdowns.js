import React, { useState } from 'react';
import WhitePen from '../svg/WhitePen';
import Arrow from '../svg/Arrow';

function ProfessionDropdowns({ profession }) {
  return (
    <section className=" relative max-w-[812px] w-full">
      <ul id="professionDropdown">
        <Acordion
          title="מה עושים עם זה"
          text={profession?.whatToDoWithIt?.text ? profession.whatToDoWithIt.text : ''}
        />
        <Acordion
          title="מה עושים עם זה"
          text={profession?.whatToDoWithIt?.text ? profession.whatToDoWithIt.text : ''}
        />
        <Acordion
          title="מה עושים עם זה"
          text={profession?.whatToDoWithIt?.text ? profession.whatToDoWithIt.text : ''}
        />
        <Acordion
          title="מה עושים עם זה"
          text={profession?.whatToDoWithIt?.text ? profession.whatToDoWithIt.text : ''}
        />
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
          <WhitePen />
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

export default ProfessionDropdowns;
