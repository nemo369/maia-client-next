/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CategoryWithHeart from '../../components/common/CategoryWithHeart';
import useProfile from '../../src/hooks/useProfile';
import VendorAPI from '../../src/services/vendor.service';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';
import CompareDropdown from '../../components/common/CompareDropdown';
import StudyForm from '../../components/common/study/StudyForm';
import CheckboxGroup from '../../components/common/CheckboxGroup';
import { DASHBOARD_TYPE_CATEGORY } from '../../src/utils/consts';
import { setLs } from '../../src/utils/localStorge';

export default function Studies({ additionalStudies, num = 3 }) {
  console.log(additionalStudies);
  const seo = seoMerge({
    title: 'זירת הלימודים',
  });
  const { t } = useTranslation('common');
  useProfile();
  const categoryGroups = [
    { name: t('הכל'), id: 1 },
    { name: t('הכי מתאים'), id: 2 },
  ];
  const [categoryType, setcategoryType] = useState(categoryGroups[0]);
  const [currentCategory, setcurrentCategory] = useState(null);
  const onChangeCategoryList = (catData) => {
    setcurrentCategory(catData.id);
    console.log(currentCategory);
  };

  const onChange = (id) => {
    const newCategory = categoryGroups.find((c) => c.id === id);
    setLs(DASHBOARD_TYPE_CATEGORY, newCategory);
    setcategoryType(newCategory);
    onChangeCategoryList(newCategory);
  };

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
                <p>{t(`נמצאו לך ${num} מקצועות שיתאימו לך`)}</p>
                <div className="relative smallpop w-4 h-4 border-solid border-white-active border-2 rounded-full font-small  text-white text-xs mr-4 hover:bg-gradient-2 inline-block text-center">
                  ?
                </div>
              </div>
            </div>
            <p className="max-w-4xl my-5">
              {t(
                ' כאן תוכלו לקרוא על מקצועות ותפקידים שיכולים להתאים לכם או שמעניינים אתכם לקרוא עליהם. מאיה מציגה בפניכם את המקצועות המתאימים ביותר. השתמשו במסננים לקריאה על מקצועות נוספים.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-5 gap-x-4 relative">
            <StudyForm />

            <div className="flex items-center">
              <CompareDropdown />
            </div>
            <div className="checkbox-container">
              <CheckboxGroup checks={categoryGroups} onChange={onChange} checkType={categoryType} />
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
