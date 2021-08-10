import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useContext, useEffect, useState } from 'react';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CheckboxGroup from '../../components/common/CheckboxGroup';
import ProfessionForm from '../../components/profession/ProfessionForm';
import ProfessionList from '../../components/profession/ProfessionList';
import ProfessionsHeader from '../../components/profession/ProfessionsHeader';
import { AppContext } from '../../src/context/state';
import useProfile from '../../src/hooks/useProfile';
import VendorAPI from '../../src/services/vendor.service';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';

export default function Professions({ allProfessions }) {
  const { user } = useContext(AppContext);

  const seo = seoMerge({
    title: 'זירת המקצועות',
  });
  const { t } = useTranslation('common');
  useProfile();

  const categoryGroups = [
    { name: t('הכל'), id: 0 },
    { name: t('הכי מתאים'), id: 1 },
  ];

  const [categoryType, setcategoryType] = useState(categoryGroups[0]);

  const [professions, setProfessions] = useState([]);
  const [myProfessions, setMyProfessions] = useState([]);
  useEffect(() => {
    const { data } = VendorAPI.getCategorys(user.token, 'professions', { byUser: true });
    setMyProfessions(data);
  }, []);
  useEffect(() => {
    setProfessions(allProfessions);
  }, [allProfessions]);

  const onChange = (id) => {
    const cat = categoryGroups.find((categ) => categ.id === id);
    setcategoryType(cat);
    if (id) {
      setProfessions(myProfessions);
      return;
    }
    setProfessions(allProfessions);
  };

  return (
    <>
      <NextSeo {...seo} />
      <section className="professions">
        <BreadCrumbs breadCrumbs={[{ title: t('מקצועות'), href: '/professions' }]} />
        <div className="grid grid-cols-none ml-3">
          <ProfessionsHeader myProfessions={myProfessions} />
          <div className="grid grid-cols-2 gap-x-1  ">
            <div className="grid grid-cols-2 gap-x-1">
              <ProfessionForm />
            </div>
            <div className="justify-self-end">
              <CheckboxGroup checks={categoryGroups} onChange={onChange} checkType={categoryType} />
            </div>
          </div>
          <hr className="border-t-2 border-dashed border-[#cccccc] my-5" />
          <ProfessionList professions={professions} />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { data: professions } = await VendorAPI.getCategorys(token, 'professions');
  const locale = `he${user.gender}`;
  // Here you can add more data
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'professions'])),
      user,
      allProfessions: professions,
    },
  };
}
