import React from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import ProfessionDropdowns from '../../components/profession/ProfessionDropdowns';
import ProfessionInfo from '../../components/profession/ProfessionInfo';
import { getUserSession } from '../../src/utils/getUser';
import ProfessionBottomSlider from '../../components/profession/ProfessionBottomSlider';
import VendorAPI from '../../src/services/vendor.service';
import { seoMerge } from '../../src/utils/next-seo.config';
import useProfile from '../../src/hooks/useProfile';

export default function Profession({ profession, additionalProfessions }) {
  const { t } = useTranslation('common');
  useProfile();
  const seo = seoMerge({
    title: t('זירת המקצועות '),
  });
  const router = useRouter();
  if (!profession) {
    if (!study) {
      // router.push('/studies');
      return (
        <>
          <NextSeo {...seo} />
          <BreadCrumbs
            breadCrumbs={[
              { title: 'מקצועות', href: '/professions' },
              { title: '404', href: router.asPath },
            ]}
          />
          <div className="flex h-full w-full items-center justify-center flex-col gap-y-4">
            <h1 className="text-5xl font-bold">המקצוע אותו חיפשת אינו קיים</h1>
            <Link href="/professions">
              <a className="py-2 px-6 border rounded-xl">חזרה לזירת המקצועות</a>
            </Link>
            <Link href="/">
              <a className="py-2 px-6 border rounded-xl">חזרה לראשי</a>
            </Link>
          </div>
        </>
      );
    }
  }

  return (
    <div>
      <section className="professions pt-10">
        <BreadCrumbs
          breadCrumbs={[
            { title: 'מקצועות', href: '/professions' },
            { title: profession.title, href: router.asPath },
          ]}
        />
        <NextSeo {...seo} />
        <h1 className="text-black text-3xl font-black mb-16">{t('זירת המקצועות')}</h1>
        <div className="md:grid grid-cols-2 gap-x-4 justify-between">
          <ProfessionInfo profession={profession} />
          <ProfessionDropdowns profession={profession} />
          <ProfessionBottomSlider professions={additionalProfessions} />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { profession } = req.query;
  const { data: additionalProfessions } = await VendorAPI.getCategorys(token, 'professions', {
    byUser: true,
  });
  const fetchedProfession = await VendorAPI.getCategory(token, 'profession', profession);
  const professionData = fetchedProfession.data;
  const locale = `he${user.gender}`;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'profession'])),
      user,
      additionalProfessions,
      profession: professionData,
    },
  };
}
