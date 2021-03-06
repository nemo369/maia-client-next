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
import useProfile from '../../src/hooks/useProfile';
import VendorAPI from '../../src/services/vendor.service';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';

const seo = seoMerge({
  title: 'זירת הלימודים',
});
export default function Studies({ myStudies, user, scopes, institutions }) {
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
    setstudies(data);
    setLoader(false);
  };

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
    setstudies(allStudies);
  };
  const dropDownChanges = async (selected) => {
    setLoader(true);
    // if (!selected.area) {
    //   selected.area = ['1'];
    // }
    const { data } = await VendorAPI.getCategorys(user.token, 'studies', selected);
    setstudies(data);
    setLoader(false);
  };
  const fetchCaegorysWithParams = async (dataToSend) => {
    setLoader(true);
    const { data } = await VendorAPI.getCategorys(user.token, 'studies', dataToSend);
    setLoader(false);
    setstudies(data);
  };

  return (
    <>
      <NextSeo {...seo} />
      <section className="studies pt-10">
        <BreadCrumbs breadCrumbs={[{ title: t('לימודים'), href: '/studies' }]} />
        <div
          className={`grid grid-cols-none ml-3 transition ${loader ? 'opacity-40' : 'opacity-100'}`}
        >
          <StudiesHeader num={categoryType.id ? myStudies.length : 0} />
          <div className="flex gap-x-4 relative">
            {!categoryType.id && (
              <StudyForm
                dropDownChanges={dropDownChanges}
                scopes={scopes}
                institutions={institutions}
              />
            )}
            {!categoryType.id && (
              <CompareDropdown
                professionIds={myStudies.map((study) => study.full_data.miK_NUM)}
                fetchCaegorysWithParams={fetchCaegorysWithParams}
                studies={studies}
              />
            )}

            <div className=" mr-auto">
              <CheckboxGroup checks={categoryGroups} onChange={onChange} checkType={categoryType} />
            </div>
          </div>
          <hr className="border-dashed my-4" />
          <StudyList allStudies={allStudies} studies={studies} />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  const [{ data: myStudies }, { data: scopes }, { data: institutions }] = await Promise.all([
    VendorAPI.getCategorys(token, 'studies', { byUser: true }),
    VendorAPI.getScopes(token),
    VendorAPI.getInstitutions(token),
  ]);
  if (user.redirect) return user;
  const gender = user.gender ? user.gender : 'm';
  const locale = `he${gender}`;
  // Here you can add more data
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'studies'])),
      user,
      myStudies,
      scopes,
      institutions,
    },
  };
}
