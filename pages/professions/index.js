import React from 'react';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import { getUserSession } from '../../src/utils/getUser';

export default function Professions() {
  return (
    <section className="professions">
      <BreadCrumbs breadCrumbs={[{ title: 'מקצועות', href: '/professions' }]} />
      <h1 className="text-black text-3xl font-black">זירת המקצוענות</h1>
    </section>
  );
}

export async function getServerSideProps(req) {
  const userSession = getUserSession(req);
  if (userSession.redirect) return userSession;

  // Here you can add more data
  return userSession;
}
