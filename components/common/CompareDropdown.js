import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Group4 from '../svg/Group4';
import Button from './Button';
import Check from './Check';

const CompareDropdown = () => {
  const { t } = useTranslation('common');
  const dummyaray = [
    { text: 'משך מסלול', id: 1 },
    { text: 'תעודה בסיום', id: 2 },
    { text: 'מאפיינים מיוחדים', id: 3 },
    { text: 'דרישות מוקדמות', id: 4 },
  ];
  const dummyareas = ['צפון', 'דרום', 'מרכז', 'השרון', 'ירושלים'];
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
        <form className="bg-white p-5 absolute text-black shadow-2xl grid min-h-[252px] top-12 z-40 rounded-lg w-full">
          <div className="triangle" />
          <div className="flex justify-around">
            {dummyaray.map((x) => (
              <div className="w-full">
                <h3 className="font-bold">{t(x.text)}</h3>

                {/* <div className="flex flex-col flex-wrap max-h-[100px] mt-5 gap-y-5"> */}
                <div className="flex checkdropdown  flex-wrap  mt-5 gap-y-5">
                  {dummyaray.map(() => (
                    <Check
                      id={x.id}
                      className="p-1 mr-3"
                      content={t('לורם איפוסם')}
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
    // </section>
  );
};

export default CompareDropdown;
