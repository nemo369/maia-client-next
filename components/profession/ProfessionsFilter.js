/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { useTranslation } from 'next-i18next';
import useFormStudy from '../../src/hooks/useFormStudy';
import Check from '../common/Check';
import Arrow from '../svg/Arrow';

export default function ProfessionsFilter({ professions, filterByMikType }) {
  const { t } = useTranslation('common');

  const [miks, setMiks] = useState([]);
  useEffect(() => {
    const newMiks = professions.reduce((accumulator, currentValue) => {
      const isNotExist = accumulator.some((acc) => acc.value === currentValue.group);
      if (!isNotExist) {
        accumulator.push({
          value: currentValue.group,
          label: currentValue.group,
        });
      }
      return accumulator;
    }, []);
    setMiks(newMiks);
  }, [professions]);
  const [label, setlabel] = useState('סוגי מקצועות');
  const {
    inputs,
    handleChange: change,
    resetForm,
  } = useFormStudy({
    mikIds: [],
  });
  const clearForm = () => {
    resetForm();
    setlabel('סוגי מקצועות');
    filterByMikType([]);
  };
  const onSend = (e) => {
    e.preventDefault();
    let labelToSet = inputs.mikIds.join(',');
    if (!inputs.mikIds.length) {
      labelToSet = 'סוגי מקצועות';
    }
    if (2 < inputs.mikIds.length) {
      labelToSet = `נבחרו ${inputs.mikIds.length} מקצועות`;
    }
    setlabel(labelToSet);
    filterByMikType([...inputs.mikIds]);
  };
  return (
    <>
      <Popup
        trigger={(open) => (
          <button
            type="button"
            className={`h-10 items-center flex justify-between px-3 rounded-lg ${
              open ? 'bg-white ring ring-green-500' : 'bg-gray-mid/10 '
            }`}
          >
            <span className="truncate pl-2">{label}</span>
            <span className={`transform transition ${!open ? 'rotate-0' : 'rotate-180'}`}>
              <Arrow />
            </span>
          </button>
        )}
        position="bottom"
        on="click"
        closeOnDocumentClick
        // contentStyle={{ padding: '0px', border: 'none' }}
        arrow
      >
        <form
          className="w-[120%] transform translate-x-[8%] border-2 border-gray-400 rounded-md px-2 py-3 bg-white  text-xs"
          onSubmit={onSend}
        >
          <div className="flex mb-4 justify-between">
            <span />
            <div className="flex justify-between items-center  px-2 gap-x-1">
              <button
                onClick={clearForm}
                type="reset"
                className="outline-none px-2 py-1 rounded-lg bg-white hover:bg-gray-100 text-gray transition"
              >
                {t('נקה')}
              </button>
              <button
                type="submit"
                className="outline-none px-2 py-1 rounded-lg hover:bg-opacity-80 bg-green-500 text-white transition"
              >
                {t('בחרי')}
              </button>
            </div>
          </div>
          <div className="overflow-auto max-h-40 flex flex-col gap-y-3 pr-3">
            {miks.map((mik) => (
              <Check
                name="mikIds"
                key={mik.value}
                value={mik.value}
                content={mik.label}
                textClass="text-xs mr-3 relative"
                wraperClass="flex gap-x-2 mb-3"
                onChange={change}
                isChecked={inputs.mikIds.includes(mik.value)}
              />
            ))}
          </div>
        </form>
      </Popup>
    </>
  );
}
