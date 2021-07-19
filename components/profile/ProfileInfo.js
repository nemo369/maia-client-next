/* eslint-disable operator-linebreak */
import React, { useContext, useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import Check from '../common/Check';
import FemaleCrown from '../svg/FemaleCrown';
import MalePic from '../svg/MalePic';
import UploadedFiles from './UploadedFiles';
import ProfileDetails from './ProfileDetails';
import { AppContext } from '../../src/context/state';
import Toggle from '../common/Toggle';
import Tooltip from '../common/Tooltip';

export default function ProfileInfo() {
  const user = { gender: 'f' };
  const { profile } = useContext(AppContext);
  const [lookingForJob, setLookingForJob] = useState(false);
  const tooltipLookingForJob =
    '<span>סגירת מצב ״מחפש עבודה״ תציג אותך במצב לא פעיל אצל<br /> המעסקים שאליהם שלחת בקשה והם לא יכולו לראות את <br /> פרטיך האישיים.</span>';
  const tooltipSendedJobs =
    '<span>סגירת מצב ״מחפש עבודה״ תציג אותך במצב לא פעיל אצל<br /> המעסקים שאליהם שלחת בקשה והם לא יכולו לראות את <br /> פרטיך האישיים.</span>';
  const tooltipReachMe =
    '<span><div> מעסיקים שמחפשים עובדים יוכלו לאתר אתכם דרך <br /> המאיה ולפנות אליכם בהצעות עבודה. אך אל דאגה!<br /> לא תהיה להם גישה אל קורות החיים שלכם ואל<br /> תוצאות האבחון ללא אישור מפורש מכם.</div><div style="color:#3c91a0; margin-top: 5px"><strong>מה כן יראה המעסיק?</strong></div><div><ul style="list-style: inside" ><li>את פרטי הקשר שלכם (שם מלא, מייל, נייד)</li><li> את אחוזי ההתאמה שלכם למשרה במקרים בהם <br /> אחוז ההתאמה עולה על 75%</li></ul></div></span>';

  console.log(profile);
  useEffect(() => {
    setLookingForJob(false);
  }, []);

  const onIsChecked = () => {
    setLookingForJob(!lookingForJob);
  };
  return (
    <div className="h-[825px] w-[430px] bg-white rounded-[20px]">
      <div className="profile-avatar mx-auto">
        {'m' === user?.gender ? <MalePic /> : <FemaleCrown />}
      </div>
      <div className="relative bottom-[40px]">
        <div className="text-orange font-bold text-[19px] text-center">
          כל הכבוד!
          <br />
          השלמת את סולם ההתקדמות שלך
        </div>
        <div className="text-gray-mid text-[18px] opacity-70 text-center">
          כל המשרות ומסלולי הלימודים מותאמים
          <br />
          בצורה אידאלית עבורך :)
        </div>
        <ProfileDetails />
        <div className="bg-[#979797] opacity-20 mx-8 h-[1px]" />
        <div className="flex justify-between items-center mb-[15px] mt-6 px-[30px]">
          <div className="flex items-center">
            <div className="text-gray-mid text-[18px]">הצג אותי כמחפש עבודה למעסיקים</div>
            <Tooltip
              trigger={
                <div className="relative smallpop w-4 h-4 border-solid border-[#666666] border-[1px] rounded-full font-small opacity-50  text-[#666666] text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
                  ?
                </div>
              }
            >
              {Parser(tooltipLookingForJob)}
            </Tooltip>
          </div>
          <Toggle isChecked={lookingForJob} onChange={onIsChecked} />
        </div>
        <div className="px-8">
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת ליועץ לצפות במשרות ששלחתי" />
            <Tooltip
              trigger={
                <div className="relative smallpop w-4 h-4 border-solid border-[#666666] border-[1px] rounded-full font-small opacity-50  text-[#666666] text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
                  ?
                </div>
              }
            >
              {Parser(tooltipSendedJobs)}
            </Tooltip>
          </div>
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת למעסיקים לפנות אלי עצמאית" />
            <Tooltip
              trigger={
                <div className="relative smallpop w-4 h-4 border-solid border-[#666666] border-[1px] rounded-full font-small opacity-50  text-[#666666] text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
                  ?
                </div>
              }
            >
              {Parser(tooltipReachMe)}
            </Tooltip>
          </div>
        </div>
        <div className="bg-[#979797] opacity-20 mx-8 h-[1px]" />
        <UploadedFiles />
      </div>
    </div>
  );
}
