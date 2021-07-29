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
        <div className="text-black text-[28px] font-bold">המועדפים שלי</div>
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
// const professionOptions = [
//   { value: 'sent', label: 'נשלחו' },
//   { value: 'favorite', label: 'אהבתי' },
// ];
// const customStyles = {
//   menuList: () => ({
//     backgroundColor: '#FFFFFF',
//     color: '#898080',
//     borderWidth: '2px',
//   }),
//   control: (provided) => ({
//     ...provided,
//     backgroundColor: '#E1E1E1',
//     border: 0,
//     borderRadius: '5px',
//     width: '200px',
//     height: 32,
//     minHeight: 32,
//     boxShadow: 'none',
//   }),
//   indicatorsContainer: () => ({
//     backgroundColor: '#E1E1E1',
//     height: 18,
//     marginBottom: 18,
//   }),
// };
