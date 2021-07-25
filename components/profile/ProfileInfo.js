import React from 'react';
import Check from '../common/Check';
import WhiteQuestion from '../svg/WhiteQuestion';
import FemaleCrown from '../svg/FemaleCrown';
import MalePic from '../svg/MalePic';
import UploadedFiles from './UploadedFiles';
import ProfileDetails from './ProfileDetails';
// import { AppContext } from '../../src/context/state';

export default function ProfileInfo() {
  const user = { gender: 'f' };
  // const { profile } = useContext(AppContext);
  // console.log(profile);
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
        <div className="flex justify-between mt-6 px-[34px] space-x-3">
          <div>
            <div className="text-gray-mid text-[18px]">מחפש עבודה?</div>
            <WhiteQuestion />
          </div>
        </div>
        <div className="px-8">
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת ליועץ/ת לצפות בפרטים שלי" />
            <WhiteQuestion />
          </div>
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת ליועץ לצפות במשרות ששלחתי" />
            <WhiteQuestion />
          </div>
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת למעסיקים לפנות אלי עצמאית" />
            <WhiteQuestion />
          </div>
        </div>
        <div className="bg-[#979797] opacity-20 mx-8 h-[1px]" />
        <UploadedFiles />
      </div>
    </div>
  );
}
