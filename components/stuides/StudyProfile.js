import React from 'react';
import CategoryPercentage from '../profile/CategoryPercentage';
import Button from '../common/Button';
import JustHeart from '../common/JustHeart';

export default function StudyProfile({ study }) {
  return (
    <div className="pofile-notifications grid grid-rows-8  rounded-2xl lg:max-w-[313px] max-h-[530px] px-5 py-5 flex-shrink-0">
      <div className="row-span-2 flex flex-shrink flex-grow justify-between font-bold text-lg leading-4 text-white border-b-[1px] border-dashed border-[#ffffff2f]">
        <div className="self-center">
          <h3 className="self-center font-medium text-lg leading-5">{study.institute}</h3>
          <h3 className="self-center font-bold text-lg leading-5">{study}</h3>
        </div>
        <CategoryPercentage percentage="85" className=" study-profile-percentage" />
      </div>
      <ul className="row-span-6 grid gap-2  pt-9">
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">
            {study.registration_candidate}
          </p>
          <p className="text-white text-sm leading-[15px]">{study.registration_candidate}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">
            {study.candidate_start_registration}
          </p>
          <p className="text-white text-sm leading-[15px]">{study.candidate_start_registration}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">{study.study_duration}</p>
          <p className="text-white text-sm leading-[15px]">{study.study_duration}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">{study.prerquisites}</p>
          <p className="text-white text-sm leading-[15px]">{study.prerquisites}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">
            {study.certification_upon_complete}
          </p>
          <p className="text-white text-sm leading-[15px]">{study.certification_upon_complete}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">{study.tuition}</p>
          <p className="text-white text-sm leading-[15px]">{study.tuition}</p>
        </li>
      </ul>

      <div className="row-span-2 flex pt-4 justify-between border-t-[1px] border-solid border-[#ffffff2f]">
        <div className="self-center">
          <JustHeart className2="bg-none" />
        </div>
        <Button className="px-8 self-center" type="button" status="main" name="לפרטים נוספים" />
      </div>
    </div>
  );
}
