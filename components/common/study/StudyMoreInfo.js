/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import SmallBrain from '../../svg/SmallBrain';
import PencileGeomitry from '../../svg/PencileGeomitry';
import Books from '../../svg/Books';

export default function StudyMoreInfo({ study }) {
  return (
    <div>
      {study.more_study_info.map((stud) => (
        <div className=" lg:mr-7 flex gap-1 mb-5 flex-shrink flex-grow">
          <div className="bg-white study-two-cornered py-7 px-3 self-start added-shadow">
            <CheckForTitle title={stud.title} />
          </div>
          <div className="bg-white study-three-cornered added-shadow grid content-evenly pb-10 pt-5  px-5 gap-4">
            <h4 className=" font-bold text-lg leading-4">{stud.title}</h4>
            <p className="text-sm leading-3">{stud.text} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const CheckForTitle = ({ title }) => {
  let classes = '';
  switch (title) {
    case 'תנאי קבלה':
      classes = <PencileGeomitry />;
      break;
    case 'תוכנית לימודים':
      classes = <Books />;
      break;
    case 'מידע נוסף ומעונות':
      classes = <SmallBrain />;
      break;

    default:
      break;
  }
  return classes;
};
