import React from 'react';
import { useRouter } from 'next/router';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import ProfessionDropdowns from '../../components/profession/ProfessionDropdowns';
import ProfessionInfo from '../../components/profession/ProfessionInfo';
import { getUserSession } from '../../src/utils/getUser';
import ProfessionBottomSlider from '../../components/profession/ProfessionBottomSlider';
import UserAPI from '../../src/services/user.service';

export default function Profession({ profession, additionalProfessions }) {
  const router = useRouter();
  return (
    <div>
      <section className="professions">
        <BreadCrumbs
          breadCrumbs={[
            { title: 'מקצועות', href: '/professions' },
            { title: profession, href: router.asPath },
          ]}
        />
        <h1 className="text-black text-3xl font-black mb-16">זירת המקצוענות</h1>
        <div className="md:flex justify-between">
          <ProfessionInfo professions={additionalProfessions} profession={profession} />
          <ProfessionDropdowns professions={additionalProfessions} profession={profession} />
        </div>
        <ProfessionBottomSlider profession={profession} professions={additionalProfessions} />
      </section>
    </div>
  );
}

export async function getServerSideProps(req) {
  const [user] = getUserSession(req);
  if (user.redirect) return user;
  const { profession } = req.query;

  // const additionalProfessions = await UserAPI.moreProfessions();
  const additionalProfessions = [];

  return {
    props: { user, profession, additionalProfessions },
  };
}
