import React from 'react';
import { useRouter } from 'next/router';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import ProfessionDropdowns from '../../components/profession/ProfessionDropdowns';
import ProfessionInfo from '../../components/profession/ProfessionInfo';

export default function Profession({ profession }) {
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
          <ProfessionInfo profession={profession} />
          <ProfessionDropdowns profession={profession} />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { profession } = query;
  return {
    props: { profession }, // will be passed to the page component as props
  };
}
