/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useTranslation } from 'next-i18next';
import useFormStudy from '../../src/hooks/useFormStudy';
import Check from '../common/Check';
import Arrow from '../svg/Arrow';

export default function ScopesFilter({ scopes, handleChange }) {
  const { t } = useTranslation('common');

  const [label, setlabel] = useState('תחום');
  const {
    inputs,
    handleChange: change,
    resetForm,
  } = useFormStudy({
    scopeIds: [],
  });
  const clearForm = () => {
    resetForm();
    setlabel('תחום');
    handleChange([]);
  };
  const onSend = (e) => {
    e.preventDefault();
    const labels = inputs.scopeIds.map((scopeId) => {
      const scope = scopes.find((scop) => scop.value === scopeId);
      return scope?.label;
    });
    let labelToSet = labels.join(',');

    if (!labels.length) {
      labelToSet = 'תחום';
    }
    if (2 < labels.length) {
      labelToSet = `נבחרו ${labels.length} תחומים`;
    }
    setlabel(labelToSet);
    handleChange([...inputs.scopeIds]);
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
            <span>ניתן לבחור עד 4 תחומים</span>
            <div className="flex justify-between items-center  px-2 gap-x-1">
              <button
                onClick={clearForm}
                type="reset"
                className="outline-none px-2 py-1 rounded-lg bg-white hover:bg-gray-100 text-gray transition"
              >
                {t('נקה')}
              </button>
              <button
                disabled={4 < inputs.scopeIds.length}
                type="submit"
                className={`outline-none px-2 py-1 rounded-lg hover:bg-opacity-80 bg-green-500 text-white transition
                ${4 < inputs.scopeIds.length ? ' bg-gray-400 cursor-not-allowed' : ' bg-green-500'}
                `}
              >
                {t('בחרי')}
              </button>
            </div>
          </div>
          <div className="overflow-auto max-h-40 flex flex-col gap-y-3 pr-3">
            {scopes.map((scope) => (
              <Check
                name="scopeIds"
                key={scope.value}
                value={scope.value}
                content={scope.label}
                textClass="text-xs mr-3 relative"
                wraperClass="flex gap-x-2 mb-3"
                onChange={change}
                isChecked={inputs.scopeIds.includes(scope.value)}
              />
            ))}
          </div>
        </form>
      </Popup>
    </>
  );
}
