import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import useForm from '../../src/hooks/useForm';
import Group4 from '../svg/Group4';
import Button from './Button';
import Check from './Check';

const CompareDropdown = () => {
  const { t } = useTranslation('common');
  const { inputs, handleChange } = useForm({
    drishot: '',
    teuda: '',
    Meshech: '',
    miuhad: 'null',
    D_partial_high_school_education: '',
    D_full_high_school_education: '',
    D_graduation_certificate: '',
    D_technician: '',
    D_engineer: '',
    D_ba: '',
    D_masters_dagree: '',
    D_phd: '',
    D_psychometric: '',
    S_MsTw: '',
    S_Ms35: '',
    S_DATI: '',
    S_MsAr: '',
    S_MsEt: '',
    S_MsDo: '',
    S_MsChad: '',
    S_Gisha: '',
    M_less_then_year: '',
    M_year: '',
    M_two_years: '',
    M_three_years: '',
    M_four_years: '',
    M_five_years_and_more: '',
    T_graduation_certificate: '',
    T_technician: '',
    T_engineer: '',
    T_partial_high_school_education: '',
    T_full_high_school_education: '',
    T_ba: '',
    T_masters_dagree: '',
    T_phd: '',
    north: '',
    south: '',
    jerusalem: '',
    tlv: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const dummyaray = [
    {
      text: 'דרישות מוקדמות',
      id: 1,
      name: 'drishot',
      options: [
        { text: 'השכלה תיכונית חלקית', id: 1, name: 'D_partial_high_school_education' },
        { text: 'השכלה תיכונית מלאה', id: 2, name: 'D_full_high_school_education' },
        { text: 'תעודת גמר/מקצוע', id: 5, name: 'D_graduation_certificate' },
        { text: 'תכנאי/ת', id: 5, name: 'D_technician' },
        { text: 'הנדסאי/ת', id: 5, name: 'D_engineer' },
        { text: 'תואר ראשון', id: 6, name: 'D_ba' },
        { text: 'תואר שני', id: 7, name: 'D_masters_dagree' },
        { text: 'תואר שלישי', id: 7, name: 'D_phd' },
        { text: 'פסיכומטרי', id: 4, name: 'D_psychometric' },
      ],
    },
    {
      text: 'מאפיינים מיוחדים',
      id: 2,
      name: 'miuhad',
      options: [
        { text: 'מתאים גם לאנשים עובדים', id: 1, name: 'S_MsTwv' },
        { text: 'לבני 30 ומעלה', id: 2, name: 'S_Ms35' },
        { text: 'לציבור הדתי והחרדי', id: 3, name: 'S_DATI' },
        { text: 'לחברה הערבית', id: 4, name: 'S_MsAr' },
        { text: 'ליוצאי אתיופיה', id: 5, name: 'S_MsEt' },
        { text: 'לבעלי צרכים מיוחדים', id: 6, name: 'S_Gisha' },
        { text: 'מסלול דו חוגי', id: 7, name: 'S_MsDo' },
        { text: 'מסלול חד חוגי', id: 8, name: 'S_MsChad' },
      ],
    },
    {
      text: 'תעודה בסיום',
      id: 2,
      name: 'teuda',
      options: [
        { text: 'תעודת גמר/תעודת מקצוע', id: 1, name: 'T_graduation_certificate' },
        { text: 'תכנאי/ת', id: 2, name: 'T_technician' },
        { text: 'הנדסאי/ת', id: 3, name: 'T_engineer' },
        { text: 'השכלה תיכונית מלאה', id: 4, name: 'T_full_high_school_education' },
        { text: 'תעודת גמר/מקצוע', id: 5, name: 'T_graduation_certificate' },
        { text: 'תואר ראשון', id: 6, name: 'T_ba' },
        { text: 'תואר שני', id: 7, name: 'T_masters_dagree' },
        { text: 'תואר שלישי', id: 8, name: 'T_phd' },
      ],
    },
    {
      text: 'משך מסלול',
      id: 4,
      name: 'meshech',
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
  const dummyareas = [
    { title: 'הנגב והדרום', id: 4, name: 'south' },
    { title: 'חיפה והצפון', id: 2, name: 'north' },
    { title: 'ירושלים וסביבתה', id: 1, name: 'jerusalem' },
    { title: 'תל אביב והמרכז', id: 3, name: 'tlv' },
  ];
  const [open, setOpen] = useState(false);
  // const [check, setCheck] = useState(false);
  const [group4fill, setGroup4fill] = useState(false);
  const handelClick = () => {
    setOpen(!open);
    setGroup4fill(!group4fill);
    console.log('focus-out');
  };

  return (
    <div className="max-h-28 grid">
      <button
        type="button"
        tabIndex={0}
        value="222"
        aria-label=""
        onClick={handelClick}
        onKeyDown={handelClick}
        className="relative h-10 w-full rounded pr-4 border-none text-gray-text dropit"
      >
        <Group4
          container={group4fill ? 'fill-current text-green-500 opacity-100' : ''}
          content={group4fill ? 'fill-current text-white' : ''}
        />
        <span className="mr-2 font-bold text-base leading-4 text-black">{t('השוואת מסלולים')}</span>
      </button>
      {open && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 absolute text-black shadow-2xl grid min-h-[252px] top-12 z-40 rounded-lg w-full gap-5"
        >
          <div className="triangle" />
          <div className="flex justify-around gap-4">
            {dummyaray.map((x) => (
              <div className="w-full wrapper-border">
                <h3 className="font-bold text-xl leading-5">{t(x.text)}</h3>

                <div className="grid checkdropdown mt-5 gap-y-5">
                  {x.options.map((y) => (
                    <Check
                      name={y.name}
                      id={y.id}
                      value={y.id}
                      onChange={handleChange}
                      className="p-1 mr-3"
                      content={t(y.text)}
                      textClass="text-sm mr-3 relative"
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
                  onChange={handleChange}
                  content={t(x.title)}
                  textClass="text-base mr-3 relative"
                  wraperClass="pl-4"
                  id={x.id}
                />
              ))}
            </div>
            <Button
              onClick={handleSubmit}
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
