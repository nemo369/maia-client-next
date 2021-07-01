import React, { useState } from 'react';
import WhitePen from '../svg/WhitePen';

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
        <WhitePen />
        {title}
      </button>
      <div className="submenu">{text}</div>
    </li>
  );
};
function ProfessionDropdowns({ profession }) {
  return (
    <section className=" relative max-w-[812px] w-full">
      <ul>
        <Acordion title="מה עושים עם זה" text={profession.whatToDoWithIt.text} />
        <Acordion title="מה עושים עם זה" text={profession.whatToDoWithIt.text} />
        <Acordion title="מה עושים עם זה" text={profession.whatToDoWithIt.text} />
        <Acordion title="מה עושים עם זה" text={profession.whatToDoWithIt.text} />
      </ul>
    </section>
  );
}

export default ProfessionDropdowns;
