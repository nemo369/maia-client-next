/* eslint-disable react/button-has-type */
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { AppContext } from '../../src/context/state';
import useFormStudy from '../../src/hooks/useFormStudy';
import VendorAPI from '../../src/services/vendor.service';
import Check from '../common/Check';
import Arrow from '../svg/Arrow';

export default function StudyForm({ scopes, dropDownChanges, institutions }) {
  const { user } = useContext(AppContext);
  const { inputs, handleChange, clearForm } = useFormStudy({
    scopeIds: [],
    professionIds: [],
    institutionIds: [],
  });
  const [professions, setProfessions] = useState([]);
  const [labels, setLabels] = useState({ scope: 'תחום', profession: 'מסלול', institution: 'מוסד' });

  const fetchProfessions = async () => {
    if (!inputs.scopeIds.length) {
      return;
    }
    const { data } = await VendorAPI.getCategorys(user.token, 'professions', {
      scopes: inputs.scopeIds,
    });
    setProfessions(data);
  };

  const clearData = (e, closeModal) => {
    e.preventDefault();
    clearForm();
    setProfessions([]);
    setLabels({ scope: 'תחום', profession: 'מסלול', institution: 'מוסד' });
    dropDownChanges(inputs);
    if (closeModal) {
      closeModal();
    }
  };
  const onSendScopes = (e, closeModal) => {
    e.preventDefault();
    fetchProfessions();
    const labelsToset = inputs.scopeIds.map((scopeId) => {
      const scope = scopes.find((scop) => scop.value === scopeId);
      return scope?.label;
    });
    let labelsToSetString = labelsToset.join(',');
    if (2 < labelsToset.length) {
      labelsToSetString = `נבחרו ${labelsToset.length} תחומים`;
    }
    setLabels({ ...labels, scope: labelsToSetString });
    if (closeModal) {
      closeModal();
    }
  };
  const onSendProfessions = (e, closeModal) => {
    e.preventDefault();
    const labelsToset = inputs.professionIds.map((id) => {
      const profession = professions.find(({ full_data: fullData }) => +fullData.miK_NUM === +id);
      return profession?.group;
    });

    let labelsToSetString = labelsToset.join(',');
    if (2 < labelsToset.length) {
      labelsToSetString = `נבחרו ${labelsToset.length} מסלולים`;
    }
    setLabels({ ...labels, profession: labelsToSetString });
    dropDownChanges(inputs);
    // setProfessionLabel([...formData.keys()].join(','));
    if (closeModal) {
      closeModal();
    }
  };
  const onSendInstitutions = (e, closeModal) => {
    e.preventDefault();

    const labelsToset = inputs.institutionIds.map((id) => {
      const institution = institutions.find(({ mosnum }) => mosnum === id);
      return institution?.mosname;
    });
    let labelsToSetString = labelsToset.join(',');
    if (2 < labelsToset.length) {
      labelsToSetString = `נבחרו ${labelsToset.length} מוסדות לימוד`;
    }
    setLabels({ ...labels, institution: labelsToSetString });

    dropDownChanges(inputs);
    // setProfessionLabel([...formData.keys()].join(','));
    if (closeModal) {
      closeModal();
    }
  };
  return (
    <div className="flex gap-x-3 pr-1">
      <ScopesPopUp
        onSend={onSendScopes}
        scopes={scopes}
        clearData={clearData}
        label={labels.scope}
        inputs={inputs}
        handleChange={handleChange}
      />
      <ProfessionsPopUp
        clearData={clearData}
        onSend={onSendProfessions}
        professions={professions}
        label={labels.profession}
        inputs={inputs}
        handleChange={handleChange}
      />
      <InstitutionPopUp
        clearData={clearData}
        onSend={onSendInstitutions}
        institutions={institutions}
        professions={inputs.professionIds}
        label={labels.institution}
        inputs={inputs}
        handleChange={handleChange}
      />
    </div>
  );
}
const ScopesPopUp = ({ scopes, onSend, clearData, label, inputs, handleChange }) => {
  const { t } = useTranslation('common');

  return (
    <Popup
      trigger={(open) => (
        <button
          type="button"
          className={`h-10 items-center text-right flex justify-between px-3 rounded-lg w-[215px] ${
            open ? 'bg-white ring ring-green-500' : 'bg-gray-mid/10 '
          }`}
        >
          <span className="truncate w-2/3 text-right">{label}</span>
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
      {(close) => (
        <form
          className="w-[120%] transform translate-x-[8%] border-2 border-gray-400 rounded-md px-2 py-3 bg-white  text-xs"
          onSubmit={(e) => onSend(e, close)}
        >
          <div className="flex mb-4 justify-between">
            <span>{t('בחר תחום')}</span>
            <div className="flex justify-between items-center  px-2 gap-x-1">
              <button
                onClick={(e) => clearData(e, close)}
                type="reset"
                className="outline-none px-2 py-1 rounded-lg bg-white hover:bg-gray-100 text-gray transition"
              >
                {t('נקה')}
              </button>
              <button
                type="submit"
                className="outline-none px-2 py-1 rounded-lg hover:bg-opacity-80 bg-green-500 text-white transition"
              >
                {t('בחר')}
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
                onChange={handleChange}
                isChecked={inputs.scopeIds.includes(scope.value)}
              />
            ))}
          </div>
        </form>
      )}
    </Popup>
  );
};
const ProfessionsPopUp = ({ professions, onSend, label, clearData, inputs, handleChange }) => {
  const { t } = useTranslation('common');
  if (!professions.length) {
    return (
      <button
        disabled
        type="button"
        className="h-10 items-center flex justify-between px-3 rounded-lg min-w-[215px] bg-gray-mid/10 cursor-not-allowed truncate"
      >
        {t('מסלול')}
      </button>
    );
  }
  return (
    <Popup
      trigger={(open) => (
        <button
          type="button"
          className={`h-10 items-center flex justify-between px-3 rounded-lg w-[215px] ${
            open ? 'bg-white ring ring-green-500' : 'bg-gray-mid/10 '
          }`}
        >
          <span className="truncate w-2/3 text-right">{label}</span>
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
      {(close) => (
        <form
          className="w-[120%] transform translate-x-[8%] border-2 border-gray-400 rounded-md px-2 py-3 bg-white  text-xs"
          onSubmit={(e) => onSend(e, close)}
        >
          <div className="flex mb-4 justify-between">
            <span>{t('בחר מסלול')}</span>
            <div className="flex justify-between items-center  px-2 gap-x-1">
              <button
                onClick={(e) => clearData(e, close)}
                type="reset"
                className="outline-none px-2 py-1 rounded-lg bg-white hover:bg-gray-100 text-gray transition"
              >
                {t('נקה')}
              </button>
              <button
                type="submit"
                className="outline-none px-2 py-1 rounded-lg hover:bg-opacity-80 bg-green-500 text-white transition"
              >
                {t('בחר')}
              </button>
            </div>
          </div>
          <div className="overflow-auto max-h-40  flex flex-col gap-y-3 pr-3 pb-4">
            {professions.map((profession) => (
              <Check
                name="professionIds"
                key={profession.full_data.miK_NUM}
                value={`${profession.full_data.miK_NUM}`}
                content={profession.title}
                textClass="text-xs mr-3 relative"
                wraperClass="flex gap-x-2 mb-3"
                onChange={handleChange}
                isChecked={inputs.professionIds.includes(`${profession.full_data.miK_NUM}`)}
              />
            ))}
          </div>
        </form>
      )}
    </Popup>
  );
};
const InstitutionPopUp = ({
  institutions,
  onSend,
  label,
  clearData,
  inputs,
  handleChange,
  professions,
}) => {
  const { t } = useTranslation('common');
  if (!institutions.length || !professions?.length) {
    return (
      <button
        disabled
        type="button"
        className="h-10 items-center flex justify-between px-3 rounded-lg min-w-[215px] bg-gray-mid/10 cursor-not-allowed truncate"
      >
        {t('מוסד')}
      </button>
    );
  }
  return (
    <Popup
      trigger={(open) => (
        <button
          type="button"
          className={`h-10 items-center flex justify-between px-3 rounded-lg w-[215px] ${
            open ? 'bg-white ring ring-green-500' : 'bg-gray-mid/10 '
          }`}
        >
          <span className="truncate w-2/3 text-right">{label}</span>
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
      {(close) => (
        <form
          className="w-[120%] transform translate-x-[8%] border-2 border-gray-400 rounded-md px-2 py-3 bg-white  text-xs"
          onSubmit={(e) => onSend(e, close)}
        >
          <div className="flex mb-4 justify-between">
            <span>{t('בחר מוסד לימודים')}</span>

            <div className="flex justify-between items-center  px-2 gap-x-1">
              <button
                onClick={(e) => clearData(e, close)}
                type="reset"
                className="outline-none px-2 py-1 rounded-lg bg-white hover:bg-gray-100 text-gray transition"
              >
                {t('נקה')}
              </button>
              <button
                type="submit"
                className="outline-none px-2 py-1 rounded-lg hover:bg-opacity-80 bg-green-500 text-white transition"
              >
                {t('בחר')}
              </button>
            </div>
          </div>
          <div className="overflow-auto max-h-40  flex flex-col gap-y-3 pr-3 py-3 pb-4">
            {institutions.map((institution) => (
              <Check
                name="institutionIds"
                key={institution.mosnum}
                value={institution.mosnum}
                content={institution.mosname}
                textClass="text-xs mr-3 relative"
                wraperClass="flex gap-x-2 mb-3"
                onChange={handleChange}
                isChecked={inputs.institutionIds.includes(institution.mosnum)}
              />
            ))}
          </div>
        </form>
      )}
    </Popup>
  );
};
