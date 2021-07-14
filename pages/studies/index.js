/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
// import React, { useContext } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Select from 'react-select';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CategoryWithHeart from '../../components/common/CategoryWithHeart';
// import ProfessionDropdown from '../../components/profile/ProfessionDropdown';
import useProfile from '../../src/hooks/useProfile';

import VendorAPI from '../../src/services/vendor.service';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';
import Dropdown from '../../components/common/Dropdown';

import CompareDropdown from '../../components/common/CompareDropdown';
import StudyForm from '../../components/common/study/StudyForm';
// import NotificationAPI from '../../src/services/notification.service';

export default function Studies({ additionalStudies }) {
  const seo = seoMerge({
    title: 'זירת המקצועות',
  });
  const { t } = useTranslation('common');
  useProfile();

  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const jobs = [
    'מהנדס אדריכלות ועיצוב פנים',
    'עיצוב תעשייתי ועיצוב חוץ',
    'הנדסת תעשייה וניהול',
    'רואה חשבון',
    'עורך דין',
    'הנדסת תעשייה וניהול',
    'הנדסת תעשייה וניהול',
    'הנדסת תעשייה וניהול',
    'הנדסת תעשייה וניהול',
    'הנדסת תעשייה וניהול',
  ];
  const professions = [
    'סייבר',
    'תכנות',
    'אדריכלות פנים',
    'הנדסת מזון',
    'הנדסת מחשבים',
    'הייטק',
    'אומנות',
    'אומנות',
    'אומנות',
    'אומנות',
    'אומנות',
    'אומנות',
  ];

  const professionList = additionalStudies.map((study) => (
    <CategoryWithHeart
      key={study.id}
      value={study.title}
      isButton
      description={study.description}
      id={study.id}
      type="studies"
      company="מכללת עזריאלי"
      className="px-0 "
    />
  ));

  const handleChange = (event) => {
    let matches = [];
    if (0 < text.length) {
      matches = additionalStudies.filter((user) => {
        const regex = new RegExp(`${text}`, 'gi');
        return user.title.match(regex);
      });
    }
    setSuggestions(matches);
    setText(event.target.value);
  };

  return (
    <>
      <NextSeo {...seo} />
      <section className="professions">
        <BreadCrumbs breadCrumbs={[{ title: t('לימודים'), href: '/studies' }]} />
        <div className="grid grid-cols-none ml-3">
          <div>
            <div className="flex">
              <h1 className="text-black text-3xl font-black">{t('מאגר לימודים')}</h1>
              <div className="flex self-center bg-orange rounded-lg py-2 px-8 h-9 text-white text-[22px] font-bold leading-6 mr-9">
                <p>נמצאו לך שלוש מקצועות שיתאימו לך</p>
                <div className="relative smallpop w-4 h-4 border-solid border-white-active border-2 rounded-full font-small  text-white text-xs mr-4 hover:bg-gradient-2 inline-block text-center">
                  ?
                </div>
              </div>
            </div>
            <p className="max-w-4xl my-5">
              כאן תוכלו לקרוא על מקצועות ותפקידים שיכולים להתאים לכם או שמעניינים אתכם לקרוא עליהם.
              מאיה מציגה בפניכם את המקצועות המתאימים ביותר. השתמשו במסננים לקריאה על מקצועות נוספים.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-x-4">
            <div className="col-start-1 col-end-3">
              <input
                className="regiserPageInput justify-self-center h-12 professionBwc w-full bg-gray-disabled  rounded-md"
                type="text"
                placeholder="חיפוש חופשי"
                value={text}
                onChange={handleChange}
              />
              <div>
                {suggestions
                  ? suggestions.map((suggestion, i) => <div key={i}>{suggestion.title}</div>)
                  : ''}
              </div>
            </div>

            {/* <Dropdown content={professions} title="תחום" /> */}
            <StudyForm />
            {/* <Dropdown content={jobs} title="מקצוע" />
            <Dropdown content={jobs} title="מסלול" /> */}
            <div className="flex items-center">
              <CompareDropdown />
              <span className="mr-2">השוואת מסלולים</span>
            </div>
          </div>
          <hr className="mainProfessionsDash my-5" />
          <div className="grid grid-cols-3 gap-2">{professionList}</div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  const { data: additionalStudies } = await VendorAPI.getCategorys(token, 'studies');
  if (user.redirect) return user;
  const locale = `he${user.gender}`;
  // Here you can add more data
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'studies'])),
      user,
      additionalStudies,
    },
  };
}
