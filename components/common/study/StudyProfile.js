import React from 'react';
import CategoryPercentage from '../../profile/CategoryPercentage';
import Button from '../Button';
import JustHeart from '../JustHeart';

export default function StudyProfile({ study }) {
  console.log(study);
  return (
    <div className="pofile-notifications grid grid-rows-8  rounded-2xl lg:max-w-[313px] max-h-[530px] px-5 py-5 flex-shrink-0">
      <div className="row-span-2 flex flex-shrink flex-grow justify-between font-bold text-lg leading-4 text-white border-b-[1px] border-dashed border-[#ffffff2f]">
        <div className="self-center">
          <h3 className="self-center font-medium text-lg leading-5">{study.institute}</h3>
          <h3 className="self-center font-bold text-lg leading-5">{study.title}</h3>
        </div>
        <CategoryPercentage percentage="85" className=" study-profile-percentage" />
      </div>
      <ul className="row-span-6 grid gap-2  pt-9">
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">
            {study.registration_candidate.title}
          </p>
          <p className="text-white text-sm leading-[15px]">{study.registration_candidate.text}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">
            {study.candidate_start_registration.title}
          </p>
          <p className="text-white text-sm leading-[15px]">
            {study.candidate_start_registration.text}
          </p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">
            {study.study_duration.title}
          </p>
          <p className="text-white text-sm leading-[15px]">{study.study_duration.text}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">{study.prerquisites.title}</p>
          <p className="text-white text-sm leading-[15px]">{study.prerquisites.text}</p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">
            {study.certification_upon_complete.title}
          </p>
          <p className="text-white text-sm leading-[15px]">
            {study.certification_upon_complete.text}
          </p>
        </li>
        <li className="grid grid-cols-2 mb-3">
          <p className="font-bold text-sm leading-[15px] text-white">{study.tuition.title}</p>
          <p className="text-white text-sm leading-[15px]">{study.tuition.text}</p>
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
