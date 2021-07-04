import React from 'react';
import Button from '../common/Button';
// import CategoryWithHeart from '../common/CategoryWithHeart';
import JustHeart from '../common/JustHeart';
import CategoryPercentage from '../profile/CategoryPercentage';

function ProfessionInfo({ profession }) {
  return (
    <article className="bg-white professionInfo max-h-[451px] rounded-lg pt-8 pb-4 px-4 mr-[6px] ml-4 w-full ">
      <header className="flex mb-7 gap-x-4 items-center">
        <h2 className="ml-auto text-2xl font-bold">{profession.title}</h2>
        <JustHeart />
        {/* <CategoryWithHeart id={profession.id} type="professions" /> */}
        <CategoryPercentage percentage="92" className="flex-none mb-2" />
      </header>
      <p>{profession.description}</p>
      <div className="mt-4 flex">
        <Button
          type="secondary"
          status="main"
          name="בדוק משרות פנויות"
          className="h-12 pb-4 pt-[10px] px-4"
        />
        {/* <button type="button"> בדוק משרות פנויות </button> */}
        <button className="font-bold mr-2" type="button">
          <u> בדוק מסלולי לימוד </u>
        </button>
      </div>
    </article>
  );
}

export default ProfessionInfo;
