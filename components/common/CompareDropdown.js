import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Group4 from '../svg/Group4';
import Button from './Button';
import Check from './Check';

const CompareDropdown = () => {
  const { t } = useTranslation('common');
  // const dummyaray = [
  //   { text: 'משך מסלול', id: 1 },
  //   { text: 'תעודה בסיום', id: 2 },
  //   { text: 'מאפיינים מיוחדים', id: 3 },
  //   { text: 'דרישות מוקדמות', id: 4 },
  // ];
  const dummyaray = [
    {
      text: 'דרישות מוקדמות',
      id: 1,
      options: [
        { text: 'השכלה תיכונית חלקית', id: 1 },
        { text: 'השכלה תיכונית מלאה', id: 2 },
        { text: 'תעודת גמר/מקצוע', id: 3 },
        { text: 'תכנאי/ת', id: 4 },
        { text: 'הנדסאי/ת', id: 5 },
        { text: 'תואר ראשון', id: 6 },
        { text: 'תואר שני', id: 7 },
        { text: 'תואר שלישי', id: 8 },
        { text: 'פסיכומטרי', id: 9 },
      ],
    },
    {
      text: 'מאפיינים מיוחדים',
      id: 2,
      options: [
        { text: 'מתאים גם לאנשים עובדים', id: 1 },
        { text: 'לבני 30 ומעלה', id: 2 },
        { text: 'לציבור הדתי והחרדי', id: 3 },
        { text: 'לחברה הערבית', id: 4 },
        { text: 'ליוצאי אתיופיה', id: 5 },
        { text: 'לבעלי צרכים מיוחדים', id: 6 },
        { text: 'מסלול דו חוגי', id: 7 },
        { text: 'מסלול חד חוגי', id: 8 },
      ],
    },
    {
      text: 'תעודה בסיום',
      id: 2,
      options: [
        { text: 'תעודת גמר/תעודת מקצוע', id: 1 },
        { text: 'תכנאי/ת', id: 2 },
        { text: 'הנדסאי/ת', id: 3 },
        { text: 'השכלה תיכונית מלאה', id: 4 },
        { text: 'תעודת גמר/מקצוע', id: 5 },
        { text: 'תואר ראשון', id: 6 },
        { text: 'תואר שני', id: 7 },
        { text: 'תואר שלישי', id: 8 },
      ],
    },
    {
      text: 'משך מסלול',

      id: 4,
      options: [
        { text: 'פחות משנה', id: 1 },
        { text: 'שנה', id: 2 },
        { text: 'שנתיים', id: 3 },
        { text: 'שלוש שנים', id: 4 },
        { text: 'ארבע שנים', id: 5 },
        { text: 'חמש שנים ומעלה', id: 6 },
      ],
    },
  ];
  const dummyareas = ['צפון', 'תל אביב והמרכז', 'ירושלים וסביבתה', 'חיפה והצפון', 'הנגב והדרום'];
  const handelClick = () => {
    console.log('focus-out');
  };
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [group4fill, setGroup4fill] = useState(false);
  const handelChange = () => {
    setOpen(!open);
    setGroup4fill(!group4fill);
  };

  return (
    <div className="max-h-28 grid">
      <button
        type="button"
        tabIndex={0}
        value="222"
        aria-label=""
        onClick={handelChange}
        onKeyDown={handelChange}
        onMouseDown={handelClick}
        className="relative h-10 w-full rounded pr-4 border-none text-gray-text dropit"
      >
        <Group4
          container={group4fill ? 'fill-current text-green-500 opacity-100' : ''}
          content={group4fill ? 'fill-current text-white' : ''}
        />
        <span className="mr-2 font-bold text-base leading-4 text-black">{t('השוואת מסלולים')}</span>
      </button>
      {open && (
        <form className="bg-white p-5 absolute text-black shadow-2xl grid min-h-[252px] top-12 z-40 rounded-lg w-full gap-5">
          <div className="triangle" />
          <div className="flex justify-around">
            {dummyaray.map((x) => (
              <div className="w-full">
                <h3 className="font-bold font-bold text-xl leading-5">{t(x.text)}</h3>

                {/* <div className="flex checkdropdown  flex-wrap  mt-5 gap-y-5"> */}
                <div className="grid checkdropdown mt-5 gap-y-5">
                  {x.options.map((y) => (
                    <Check
                      id={x.id}
                      className="p-1 mr-3"
                      content={t(y.text)}
                      textClass="text-base mr-3 relative"
                      wraperClass="pl-4"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between items-end">
            <div className="checkdropdown1">
              <h3 className="text-xl leading-5 font-bold mb-3">אזור</h3>
              {dummyareas.map((x) => (
                <Check
                  className="p-1 mr-3 cheche"
                  onChange={() => setCheck(!check)}
                  content={t(x)}
                  textClass="text-base mr-3 relative"
                  wraperClass="pl-4"
                />
              ))}
            </div>
            <Button
              onClick={handelChange}
              className="w-24"
              type="button"
              status="main"
              name="חיפוש"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default CompareDropdown;
