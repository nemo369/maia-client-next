import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import JustHeart from '../common/JustHeart';
import CategoryPercentage from '../profile/CategoryPercentage';

function ProfessionInfo({ profession }) {
  const { t } = useTranslation('common');
  return (
    <article className="bg-white professionInfo shadow   rounded-lg pt-8 pb-4 px-4 mr-[6px] ml-4 w-full ">
      <header className="flex mb-7 gap-x-4 items-center">
        <h2 className="ml-auto text-2xl font-bold">{profession.title}</h2>
        <JustHeart id={profession.id} type="professions" />
        <CategoryPercentage percentage="92" className="flex-none mb-2" />
      </header>
      <div dangerouslySetInnerHTML={{ __html: profession.description }} />

      <div className="mt-4 flex">
        <Link href={`/studies/${profession.id}`}>
          <button className="font-bold mr-2" type="button">
            <u>{t('בדוק מסלולי לימוד')}</u>
          </button>
        </Link>
      </div>
    </article>
  );
}

export default ProfessionInfo;
