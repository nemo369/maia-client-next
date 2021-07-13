/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
// import React, { useContext } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CategoryWithHeart from '../../components/common/CategoryWithHeart';
import ProfessionDomain from '../../components/profile/ProfessionDomain';
// import ProfessionDropdown from '../../components/profile/ProfessionDropdown';
import useProfile from '../../src/hooks/useProfile';

import VendorAPI from '../../src/services/vendor.service';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';
import Dropdown from '../../components/common/Dropdown';
// import NotificationAPI from '../../src/services/notification.service';

export default function Professions({ additionalProfessions }) {
  const seo = seoMerge({
    title: 'זירת המקצועות',
  });
  const { t } = useTranslation('common');
  useProfile();
  // const [searchTerm, setSearchTerm] = useState('');
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  // const [value, setValue] = useState('');
  // const value = '';
  const professionList = additionalProfessions.map((profession) => (
    <CategoryWithHeart
      key={profession.id}
      value={profession.title}
      isButton
      description={profession.description}
      id={profession.id}
      type="professions"
      className="px-0 "
    />
  ));

  const handleChange = (event) => {
    let matches = [];
    if (0 < text.length) {
      matches = additionalProfessions.filter((user) => {
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
        <BreadCrumbs breadCrumbs={[{ title: t('מקצועות'), href: '/professions' }]} />
        <div className="grid grid-cols-none ml-3">
          <div>
            <h1 className="text-black text-3xl font-black">{t('זירת המקצוענות')}</h1>
            <p className="max-w-4xl mb-5">
              כאן תוכלו לקרוא על מקצועות ותפקידים שיכולים להתאים לכם או שמעניינים אתכם לקרוא עליהם.
              מאיה מציגה בפניכם את המקצועות המתאימים ביותר. השתמשו במסננים לקריאה על מקצועות נוספים.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-1  ">
            <div>
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
            <div className="grid grid-cols-2 gap-x-1">
              <ProfessionDomain />
              <Dropdown />
              {/* <ProfessionDropdown /> */}
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
  const { data: additionalProfessions } = await VendorAPI.getCategorys(token, 'professions');
  if (user.redirect) return user;
  const locale = `he${user.gender}`;
  // Here you can add more data
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'professions'])),
      user,
      additionalProfessions,
    },
  };
}
