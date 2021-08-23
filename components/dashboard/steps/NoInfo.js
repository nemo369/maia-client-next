import { useTranslation } from 'next-i18next';
import Button from '../../common/Button';
import Arrow from '../../svg/Arrow';

function NoInfo({ href }) {
  const { t } = useTranslation('common');

  return (
    <article className="h-full flex flex-col justify-center items-center text-center">
      <h3 className="text-orange text-4xl font-bold">רגע, חסר משהו</h3>
      <p className="w-2/3 text-lg mt-8 mb-10">
        מאיה זיהתה שעדיין אין לה מספיק מידע אודותיך ולכן היא לא יכולה לזהות את הפרופיל התעסוקתי שלך
        ולהמליץ לך על משרות ועבודות אידאליות עבורך.
        <br />
        <strong>אבל לא לדאוג, מספיק שתשלים את השלבים הבאים ואתה מסודר :)</strong>
      </p>
      <a href={href}>
        <Button
          className="flex justify-between px-3 text-white items-center"
          type="button"
          status="main"
        >
          <span className="mx-auto px-4">{t('השלם נתונים')}</span>
          <span className="transform rotate-90">
            <Arrow />
          </span>
        </Button>
      </a>
    </article>
  );
}

export default NoInfo;