import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import PopUp from '../common/PopUp';
import AddFav from '../svg/AddFav';
import Button from '../common/Button';

const AddToFav = () => {
  const [isDone, setIsDone] = useState(false);
  const { t } = useTranslation('common');

  return (
    <div>
      <PopUp defaultOpen>
        <PopupContent />
      </PopUp>
    </div>
  );
};

export default AddToFav;

const PopupContent = () => (
  <div className="flex flex-col items-center justify-center py-16 px-16">
    <AddFav />
    <h2 className="text-center text-3xl font-bold ">מקצוע נוסף למועדפים</h2>
    <div>
      {t('באזור האישי תוכל לצפות בכל')}
      <br />
      המקצועות / המשרות והלימודים
      <br />
      שהוספת למועדפים
    </div>
    <Button className="h-[50px] w-[240px]" status="secondary" name="לאזור האישי" />
    <Button className="h-[50px] w-[240px]" status="secondary" name="סגור" />
  </div>
);
