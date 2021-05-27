import React from 'react';
import BreadCrumbs from '../../components/common/BreadCrumbs';

export default function Professions() {
  return (
    <section className="professions">
      <BreadCrumbs breadCrumbs={[{ title: 'מקצועות', href: '/professions' }]} />
      <h1 className="text-black text-3xl font-black">זירת המקצוענות</h1>
    </section>
  );
}
