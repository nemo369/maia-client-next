/* eslint-disable react/button-has-type */
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { AppContext } from '../../src/context/state';
import VendorAPI from '../../src/services/vendor.service';
import ProfessionCheckbox from '../common/ProfessionCheckbox';
import Scope from '../common/Scope';
import Arrow from '../svg/Arrow';

export default function StudyForm({ scopes, handleChange }) {
  const { user } = useContext(AppContext);

  const [form, setform] = useState({ scopeIds: [], professionIds: [], institutionIds: [] });
  const [professions, setProfessions] = useState([]);
  const [scopeLabel, setScopeLabel] = useState('תחום');
  const [professionLabel, setProfessionLabel] = useState('מסלול');
  const [institutionLabel, setInstitutionLabel] = useState('מוסד');
  const fetchProfessions = async () => {
    if (!form.scopeIds.length) {
      return;
    }
    const { data } = await VendorAPI.getCategorys(user.token, 'professions', {
      scopes: form.scopeIds,
    });
    setProfessions(data);
  };

  const clearData = (e) => {
    e.preventDefault();
    setform({ scopeIds: [], professionIds: [], institutionIds: [] });
    setProfessions([]);
    setScopeLabel('תחום');
    setProfessionLabel('מסלול');
    setInstitutionLabel('מוסד');
  };
  const onSendScopes = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setform({ ...form, scopeIds: [...formData.values()], professionIds: [] });
    setTimeout(() => {
      fetchProfessions();
    }, 0);
    setScopeLabel([...formData.keys()].join(','));
  };
  const onSendProfessions = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setform({ ...form, professionIds: [...formData.values()] });
    setTimeout(() => {
      handleChange(form);
    }, 0);
    setProfessionLabel([...formData.keys()].join(','));
  };
  return (
    <div className="flex gap-x-3">
      <ScopesPopUp onSend={onSendScopes} scopes={scopes} clearData={clearData} label={scopeLabel} />
      <ProfessionsPopUp
        clearData={clearData}
        onSend={onSendProfessions}
        professions={professions}
        label={professionLabel}
      />
      <InstitutionPopUp
        clearData={clearData}
        onSend={onSendProfessions}
        institutions={[]}
        label={institutionLabel}
      />
    </div>
  );
}
const ScopesPopUp = ({ scopes, onSend, clearData, label }) => {
  const { t } = useTranslation('common');

  return (
    <Popup
      trigger={(open) => (
        <button
          type="button"
          className={`h-10 items-center flex justify-between px-3 rounded-lg w-[215px] ${
            open ? 'bg-white ring ring-green-500' : 'bg-gray-mid/10 '
          }`}
        >
          <span className="truncate w-2/3">{label}</span>
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
          <span>{t('בחר תחום')}</span>
          <div className="flex justify-between items-center  px-2 gap-x-1">
            <button
              onClick={clearData}
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
        <div className="overflow-auto max-h-40">
          {scopes.map((scope) => (
            <Scope scope={scope} key={scope.value} />
          ))}
        </div>
      </form>
    </Popup>
  );
};
const ProfessionsPopUp = ({ professions, onSend, label, clearData }) => {
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
          <span className="truncate w-2/3">{label}</span>
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
              onClick={clearData}
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
        <div className="overflow-auto max-h-40">
          {professions.map((profession) => (
            <ProfessionCheckbox profession={profession} key={profession.id} />
          ))}
        </div>
      </form>
    </Popup>
  );
};
const InstitutionPopUp = ({ institutions, onSend, label, clearData }) => {
  const { t } = useTranslation('common');
  if (!institutions.length) {
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
          <span className="truncate w-2/3">{label}</span>
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
          <div className="flex justify-between items-center  px-2 gap-x-1">
            <button
              onClick={clearData}
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
        <div className="overflow-auto max-h-40">
          {institutions.map((institution) => (
            <ProfessionCheckbox profession={institution} key={institution.id} />
          ))}
        </div>
      </form>
    </Popup>
  );
};
