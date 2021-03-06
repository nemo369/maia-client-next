import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import CheckboxGroupGray from '../common/CheckboxGroupGray';
import ProfileFavoriteData from './ProfileFavoriteData';

export default function ProfileFavorite({ studies, professions }) {
  const { t } = useTranslation('common');
  const categoryGroups = [
    // { name: t('משרות'), id: 'jobs' },
    { name: t('לימודים'), id: 'studies' },
    { name: t('מקצועות'), id: 'professions' },
  ];

  const [categoryType, setcategoryType] = useState(categoryGroups[0]);
  // const [, setSelectCategory] = useState('');

  const onChange = (id) => {
    const newCategory = categoryGroups.find((c) => c.id === id);
    setcategoryType(newCategory);
  };

  // const handleSelectCahnge = ({ value }) => {
  //   setSelectCategory(value);
  // };
  return (
    <div className="my-[18px] h-[420px] bg-white rounded-[20px] py-[25px] px-[21px]">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-[28px] font-bold">המועדפים שלי</h2>
        <div className="flex">
          {/* <div className="ml-[6px]">
            <Select
              placeholder="סינון"
              name="profession"
              onChange={handleSelectCahnge}
              options={professionOptions}
              styles={customStyles}
            />
          </div> */}
          <div>
            <CheckboxGroupGray
              checks={categoryGroups}
              onChange={onChange}
              checkType={categoryType}
            />
          </div>
        </div>
      </div>
      <ProfileFavoriteData
        categoryType={categoryType}
        jobs={[]}
        studies={studies}
        professions={professions}
      />
    </div>
  );
}
