/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import CheckboxGroup from '../../components/common/CheckboxGroup';
import CompareDropdown from '../../components/stuides/CompareDropdown';
import StudiesHeader from '../../components/stuides/StudiesHeader';
import StudyForm from '../../components/stuides/StudyForm';
import StudyList from '../../components/stuides/StudyList';
import useForm from '../../src/hooks/useForm';
import useProfile from '../../src/hooks/useProfile';
import VendorAPI from '../../src/services/vendor.service';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';

const seo = seoMerge({
  title: 'זירת הלימודים',
});
export default function Studies({ myStudies, user, scopes }) {
  const [loader, setLoader] = useState(false);
  const [studies, setstudies] = useState(myStudies);
  const [allStudies, setAllstudies] = useState(null);
  const { t } = useTranslation('common');
  useProfile();
  const categoryGroups = [
    { name: t('הכל'), id: 0 },
    { name: t('הכי מתאים'), id: 1 },
  ];
  const [categoryType, setcategoryType] = useState(categoryGroups[1]);

  const fetchAllStuides = async () => {
    // TODO: should be uppon filter
    setLoader(true);
    const { data } = await VendorAPI.getCategorys(user.token, 'studies');
    setAllstudies(data);
    setLoader(false);
  };

  const { inputs, handleChange } = useForm({
    field: null,
    profession: null,
    path: null,
  });
  const onChange = (id) => {
    const cat = categoryGroups.find((categ) => categ.id === id);
    setcategoryType(cat);
    if (id) {
      setstudies(myStudies);
      return;
    }
    if (!allStudies) {
      fetchAllStuides();
      return;
    }
    setAllstudies(allStudies);
  };
  const [comparedCategorys, setComparedCategorys] = useState('');
  const filteredCategories = async (dataToSend) => {
    setComparedCategorys(await VendorAPI.fetchComparedCategorys(user.token, dataToSend, 'studies'));
  };

  return (
    <>
      <NextSeo {...seo} />
      <section className="professions">
        <BreadCrumbs breadCrumbs={[{ title: t('לימודים'), href: '/studies' }]} />
        <div
          className={`grid grid-cols-none ml-3 transition ${loader ? 'opacity-40' : 'opacity-100'}`}
        >
          <StudiesHeader num={myStudies.length} />
          <div className="flex gap-x-4 relative">
            <StudyForm handleChange={handleChange} scopes={scopes} />
            <div className="flex items-center">
              <CompareDropdown
                comparedCategorys={comparedCategorys}
                filteredCategories={filteredCategories}
                topIputs={inputs}
                //לבנתיים//
                additionalStudies={[]}
              />
            </div>
            <div className=" mr-auto">
              <CheckboxGroup checks={categoryGroups} onChange={onChange} checkType={categoryType} />
            </div>
          </div>
          <hr className="border-dashed my-4" />
          <StudyList studies={studies} />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  // const { data: additionalStudies } = await VendorAPI.getCategorys(token, 'studies');
  const { data: myStudies } = await VendorAPI.getCategorys(token, 'studies', { byUser: true });
  const { data: scopes } = await VendorAPI.getScopes(token);

  if (user.redirect) return user;
  const locale = `he${user.gender}`;
  // Here you can add more data
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'studies'])),
      user,
      myStudies,
      scopes,
    },
  };
}
