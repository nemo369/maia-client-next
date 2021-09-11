/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import SmallBrain from '../svg/SmallBrain';
import PencileGeomitry from '../svg/PencileGeomitry';
import Books from '../svg/Books';

export default function StudyMoreInfo({ study }) {
  return (
    <div>
      {Object.entries(study).map(([key]) => (
        <Li key={key} place={key} study={study} />
      ))}
    </div>
  );
}
const Li = ({ place, study }) => {
  const getLine = (key) => {
    switch (key) {
      case 'teurdrishot':
        return { key: study[key] + '<br/><br/>' + study.halichmiun, value: 'תנאי קבלה' };
      case 'tochnit':
        return { key: study[key], value: 'תוכנית לימודים' };
      case 'hearot':
        return { key: study[key], value: 'מידע נוסף ומעונות' };

      default:
        return {};
    }
  };
  const { key, value } = getLine(place);
  if (!key || !value) return null;
  return (
    <div className=" lg:mr-7 flex gap-1 mb-5 flex-shrink flex-grow">
      <div className="bg-white rounded-r-xl py-7 px-3 flex items-center justify-center shadow w-[100px] h-[100px]">
        <CheckForTitle title={place} />
      </div>
      <div className="bg-white rounded-b-lg rounded-tl-lg shadow grid pb-10 pt-5  px-5 gap-4 w-full">
        <h4 className=" font-bold text-lg leading-4">{value}</h4>
        <p className="text-sm leading-none" dangerouslySetInnerHTML={{ __html: key }} />
      </div>
    </div>
  );
};
const CheckForTitle = ({ title }) => {
  let classes = '';
  switch (title) {
    case 'teurdrishot':
      classes = <PencileGeomitry />;
      break;
    case 'tochnit':
      classes = <Books />;
      break;
    case 'hearot':
      classes = <SmallBrain />;
      break;

    default:
      break;
  }
  return classes;
};
