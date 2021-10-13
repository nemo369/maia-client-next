import React from 'react';
import CategoryPercentage from '../profile/CategoryPercentage';
import Button from '../common/Button';
import JustHeart from '../common/JustHeart';

export default function StudyProfile({ study }) {
  return (
    <div className="pofile-notifications grid grid-rows-8  rounded-2xl lg:max-w-[313px] max-h-[530px] px-5 py-5 flex-shrink-0">
      <div className="row-span-2 flex flex-shrink flex-grow justify-between font-bold text-lg leading-4 text-white border-b-[1px] border-dashed border-[#ffffff2f]">
        <div className="self-center">
          <h3 className="self-center font-medium text-lg leading-5">{study.mosname}</h3>
          <h3 className="self-center font-bold text-lg leading-5">{study.hearot}</h3>
        </div>
        <CategoryPercentage percentage={null} className=" study-profile-percentage" />
      </div>
      <ul className="row-span-6 grid gap-2  pt-9">
        {Object.entries(study).map(([key]) => (
          <Li key={key} place={key} study={study} />
        ))}
      </ul>

      <div className="row-span-2 flex pt-4 justify-between border-t-[1px] border-solid border-[#ffffff2f]">
        <div className="self-center">
          <JustHeart className2="bg-none" id={study.iD_Num} type="studies" />
        </div>
        {study.wwwAddress && (
          <a href={study.wwwAddress} target="_blank" rel="noopener noreferrer">
            <Button className="px-8 self-center" type="button" status="main" name="לפרטים נוספים" />
          </a>
        )}
      </div>
    </div>
  );
}

const Li = ({ place, study }) => {
  const getLine = (key) => {
    switch (key) {
      case 'registemo':
        return { key: study[key], value: 'מועד הרשמה' };
      case 'begiN_DATE':
        return { key: study[key], value: 'מועד תחילת לימודים' };
      case 'meS_TEUR':
        // case 'meshech':
        return { key: study[key], value: 'משך הלימודים' };
      case 'teurdrishot':
        return { key: study[key], value: 'דרישות מקדימות' };
      case 'teudA_TEUR':
        return { key: study[key], value: 'תעודה בסיום' };
      case 'govah':
        return { key: study[key], value: 'שכר לימוד' };

      default:
        return {};
    }
  };
  const { key, value } = getLine(place);
  if (!key || !value) return null;
  return (
    <li className="grid grid-cols-2 mb-3">
      <p className="font-bold text-sm leading-[15px] text-white">{value}</p>
      <p className="text-white text-sm leading-[15px]">{key}</p>
    </li>
  );
};
