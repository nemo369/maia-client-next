import { useTranslation } from 'next-i18next';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../src/context/state';
import HelpInfo from '../popups/HelpInfo';
import ProfileAvatar from './ProfileAvatar';
import ProfileDetails from './ProfileDetails';

export default function ProfileInfo({ cities }) {
  // const [lookingForJob, setLookingForJob] = useState(false);
  const [loader, setLoader] = useState(false);
  const { profile } = useContext(AppContext);

  const { t } = useTranslation('common');

  if (!profile) return null;
  return (
    <section
      className={`${
        loader ? 'opacity-60' : 'opacity-100'
      } transiton w-[430px]  bg-white rounded-[20px] relative mb-18`}
    >
      <HelpInfo className="absolute left-0 top-0 -translate-y-4 -translate-x-2 right-auto cursor-pointer">
        <div className="w-[120px] h-[120px] rounded-full bg-orange  border-white border-2 text-white font-bold text-lg flex flex-col justify-center items-center leading-tight hover:bg-orange-active transition">
          <span>{t('זקוק')}</span>
          <span>להכוונה</span>
          <span>אישית?</span>
        </div>
      </HelpInfo>
      <ProfileAvatar setLoader={setLoader} />

      <div className="relative top-[-70px]">
        <h2 className="text-orange font-bold text-[24px] text-center leading-6">
          כל הכבוד!
          <br />
          <span className="text-gray-mid font-bold opacity-70 text-[20px]">
            השלמת את סולם ההתקדמות שלך
          </span>
        </h2>
        <div className="text-gray-mid text-[18px] opacity-70 text-center mb-4 leading-4">
          כל המקצועות ומסלולי הלימודים מותאמים
          <br />
          בצורה אידאלית עבורך :)
        </div>
        {profile && <ProfileDetails cities={cities} />}
        <div className="bg-[#979797] opacity-20 mx-8 h-[1px]" />
      </div>
    </section>
  );
}
