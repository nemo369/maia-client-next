import React from 'react';
import { useRouter } from 'next/router';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import ProfessionDropdowns from '../../components/profession/ProfessionDropdowns';
import ProfessionInfo from '../../components/profession/ProfessionInfo';
import { getUserSession } from '../../src/utils/getUser';
import ProfessionBottomSlider from '../../components/profession/ProfessionBottomSlider';
import VendorAPI from '../../src/services/vendor.service';

export default function Profession({ profession, additionalProfessions }) {
  const router = useRouter();
  if (!profession) {
    return 'TODO: redirect to professions page';
  }
  return (
    <div>
      <section className="professions">
        <BreadCrumbs
          breadCrumbs={[
            { title: 'מקצועות', href: '/professions' },
            { title: profession.title, href: router.asPath },
          ]}
        />
        <h1 className="text-black text-3xl font-black mb-16">זירת המקצוענות</h1>
        <div className="md:flex justify-between">
          <ProfessionInfo profession={profession} />
          <ProfessionDropdowns profession={profession} />
        </div>
        <ProfessionBottomSlider professions={additionalProfessions} />
      </section>
    </div>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { profession } = req.query;

  const professions = await VendorAPI.getCategorys(token, 'professions');
  const additionalProfessions = professions.data;

  const fetchedProfession = await VendorAPI.getCategory(token, 'profession', profession);
  const professionData = fetchedProfession.data;
  return {
    props: { user, additionalProfessions, profession: professionData },
  };
}
