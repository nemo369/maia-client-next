import { useTranslation } from 'next-i18next';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PopUp from '../common/PopUp';
import PagePen from '../svg/PagePen';
import Button from '../common/Button';
import { AppContext } from '../../src/context/state';

const NextStepPopUp = (props) => (
  // const [isDone, setIsDone] = useState(false);
  <div>
    <PopUp defaultOpen>
      <PopupContent {...props} />
    </PopUp>
  </div>
);
export default NextStepPopUp;

const PopupContent = ({ closePopup }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const { profile } = useContext(AppContext);
  const onClick = (e) => {
    e.preventDefault();

    const windowOpen = window.open(profile.iampro_test_url);
    setTimeout(() => {
      windowOpen.postMessage('Maya', profile.iampro_test_url);
    }, 6000);
    window.addEventListener(
      'message',
      (event) => {
        if (event.data) {
          router.push({ pathname: '/', query: { refetchuser: 'true', testDone: 'iampro' } });
        }
      },
      false
    );
  };
  return (
    <div className="flex flex-col items-center justify-center py-4 px-16 text-center">
      <PagePen />
      <h2 className="text-center text-3xl font-bold ">
        מעבר אל השלב
        <br />
        ״מה מעניין אותי״
      </h2>
      <div className="my-4">
        {t('בשלב זה תועבר אל שאלון הקריירה')}
        <br />
        שיסייע לך לזהות את תחומי העניין
        <br />
        התעסוקתיים שלך
      </div>
      <a onClick={onClick} href={profile?.iampro_test_url}>
        <Button
          className="h-[50px] w-[240px]"
          status="secondary"
          name={t('התחל')}
          onClick={() => closePopup(false)}
        />
      </a>
      <button
        className="h-[50px] w-[240px]"
        type="button"
        id="close-modal-hack"
        onClick={() => closePopup(false)}
      >
        {t('סגור')}
      </button>
    </div>
  );
};
