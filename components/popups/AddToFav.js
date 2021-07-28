import { useTranslation } from 'next-i18next';
import React from 'react';
import Link from 'next/link';
import PopUp from '../common/PopUp';
import AddFav from '../svg/AddFav';
import Button from '../common/Button';

const AddToFav = () => (
  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);

export default AddToFav;

const PopupContent = () => {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col items-center justify-center px-[65px]">
      <AddFav />
      <h2 className="text-center text-3xl mt-[11px] font-bold ">מקצוע נוסף למועדפים</h2>
      <div className="text-center text-[20px] mt-[50px] leading-[30px]">
        {t('באזור האישי תוכל לצפות בכל')}
        <br />
        המקצועות / המשרות והלימודים
        <br />
        שהוספת למועדפים
      </div>
      <Link href="/profile">
        <a>
          <Button className="h-[50px] w-[240px] mt-[30px]" status="secondary" name="לאזור האישי" />
        </a>
      </Link>
      <Button
        className="h-[50px] w-[240px] opacity-50 border-none font-bold bg-none hover:bg-none"
        name="סגור"
      />
    </div>
  );
};