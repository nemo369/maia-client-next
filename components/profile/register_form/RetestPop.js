/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import { AppContext } from '../../../src/context/state';
import Button from '../../common/Button';
import ResetPopUp from './ResetPopUp';

const RetestPop = () => {
  const { t } = useTranslation('common');
  const { profile } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setloading] = useState(false);

  const startTest = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setloading(true);

    const windowOpen = window.open(profile.iampro_test_url);
    setTimeout(() => {
      windowOpen.postMessage('Maya', profile.iampro_test_url);
    }, 6000);
    window.addEventListener(
      'message',
      (event) => {
        if (event.data) {
          setloading(false);
          router.push({ pathname: '/', query: { refetchuser: 'true', testDone: 'iampro' } });
        }
      },
      false
    );
  };
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="px-4"
        type="button"
        status="main"
        name={t('בצע מבחן חוזר')}
      />
      <ResetPopUp isOpen={isOpen} loading={loading} startTest={startTest} setIsOpen={setIsOpen} />
    </>
  );
};
export default RetestPop;
