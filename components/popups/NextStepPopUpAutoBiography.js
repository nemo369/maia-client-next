import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { AppContext } from '../../src/context/state';
import Button from '../common/Button';
import PopUp from '../common/PopUp';

const NextStepPopUpAutoBiography = () => (
  // const [isDone, setIsDone] = useState(false);

  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);
export default NextStepPopUpAutoBiography;

const PopupContent = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const { profile } = useContext(AppContext);
  const onClick = (e) => {
    e.preventDefault();

    const windowOpen = window.open(profile.vendor_token);
    setTimeout(() => {
      windowOpen.postMessage('Maya', profile.vendor_token);
    }, 6000);
    window.addEventListener(
      'message',
      (event) => {
        if (event.data) {
          router.push({ pathname: '/', query: { refetchuser: 'true', testDone: 'autoBiography' } });
        }
      },
      false
    );
  };
  return (
    <div className="flex flex-col items-center justify-center py-16 px-16">
      <h2 className="text-center text-3xl font-bold ">
        מעבר אל השלב
        <br />
        ״מה עשיתי עד כה״
      </h2>
      <div className="my-6">
        {t('בשלב זה תועבר אל שאלון הקריירה')}
        <br />
        שמסכם את המסלול חייך עד כה
        <br />
      </div>
      <a onClick={onClick} href={profile?.vendor_token} className="mb-2">
        <Button className="h-[50px] w-[240px]" status="secondary" name={t('התחל')} />
      </a>
      <Button className="h-[50px] w-[240px]" status="secondary" name={t('סגור')} />
    </div>
  );
};
