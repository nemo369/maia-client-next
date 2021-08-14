import React, { useContext, useEffect, useState } from 'react';
import { SET_PROFILE } from '../../src/context/appReducer';
import { AppContext } from '../../src/context/state';
import ProfileAPI from '../../src/services/profile.service';
import Check from '../common/Check';
import Toggle from '../common/Toggle';
import Tooltip from '../common/Tooltip';
import CameraSvg from '../svg/Camera';
import FemaleCrown from '../svg/FemaleCrown';
import MalePic from '../svg/MalePic';
import NeedInfo from '../svg/NeedInfo';
import ProfileDetails from './ProfileDetails';
import UploadedFiles from './UploadedFiles';

export default function ProfileInfo() {
  const [lookingForJob, setLookingForJob] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const { profile, user, dispatch } = useContext(AppContext);

  const tooltipLookingForJob = `<span>סגירת מצב ״מחפש עבודה״ תציג אותך במצב לא פעיל אצל
  <br /> המעסקים שאליהם שלחת בקשה והם לא יכולו לראות את <br /> פרטיך האישיים.</span>`;
  const tooltipSendedJobs = `<span>סגירת מצב ״מחפש עבודה״ תציג אותך במצב לא פעיל אצל
  <br /> המעסקים שאליהם שלחת בקשה והם לא יכולו לראות את <br /> פרטיך האישיים.</span>`;
  const tooltipReachMe = `<span><div> מעסיקים שמחפשים עובדים יוכלו לאתר אתכם דרך 
  <br /> המאיה ולפנות אליכם בהצעות עבודה. אך אל דאגה!<br /> לא תהיה להם גישה אל קורות החיים שלכם ואל<br /> תוצאות האבחון ללא אישור מפורש מכם.</div>
  <div style="color:#3c91a0; margin-top: 5px"><strong>מה כן יראה המעסיק?</strong></div>
  <div><ul style="list-style: inside" ><li>את פרטי הקשר שלכם (שם מלא, מייל, נייד)</li><li> את אחוזי ההתאמה שלכם למשרה במקרים בהם <br /> אחוז ההתאמה עולה על 75%</li></ul></div>
  </span>`;
  useEffect(() => {
    setLookingForJob(false);
  }, []);
  const onIsChecked = () => {
    setLookingForJob(!lookingForJob);
  };
  const validateImage = (file) => {
    if (!file) {
      return false;
    }
    if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
      return false;
    }
    if (3097152 < file.size) {
      // 3 MiB for bytes.
      return false;
    }

    return true;
  };

  const updateProfle = async (file) => {
    setLoader(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', profile.first_name);
    const { data, status } = await ProfileAPI.updateProfileImage(user.token, formData);
    if (200 === status && data?.updated_profile) {
      const { newProfile } = await ProfileAPI.updateProfile(user.token, {
        avatar: data,
      });
      dispatch({ type: SET_PROFILE, profile: newProfile });
    }
    setLoader(false);
    setSelectedFile(null);
  };

  const addImage = (event) => {
    const [file] = event.target.files;

    if (!validateImage(file)) {
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
    updateProfle(file);
  };

  if (!profile) return null;
  return (
    <section
      className={`${
        loader ? 'opacity-60' : 'opacity-100'
      } transiton h-[825px] w-[430px] bg-white rounded-[20px] relative`}
    >
      <span className="absolute top-[-80px] right-[300px]">
        <NeedInfo />
      </span>
      <div className="w-[130px] mx-auto  ">
        {profile.avatar ? (
          <div className="w-[135px] overflow-hidden mx-auto rounded-full">
            <img
              src={profile.avatar.src}
              widh={135}
              height={135}
              loading="lazy"
              alt={profile.first_name}
            />
          </div>
        ) : null}
        {!profile.avatar && 'm' === profile?.gender && <MalePic />}
        {!profile.avatar && 'f' === profile?.gender && <FemaleCrown />}
        <label
          accept="image/jpeg, image/jpg"
          value={selectedFile}
          className="cursor-pointer hover:bg-opacity-90 transition mr-auto transform translate-y-[-32px] w-10 h-10 border-2 border-white rounded-full flex justify-center items-center text-white bg-gray-300"
        >
          <CameraSvg />
          <input type="file" className="hidden" onChange={addImage} />
        </label>
      </div>
      <div className="">
        <h2 className="text-orange font-bold text-[19px] text-center">
          כל הכבוד!
          <br />
          השלמת את סולם ההתקדמות שלך
        </h2>
        <div className="text-gray-mid text-[18px] opacity-70 text-center">
          כל המשרות ומסלולי הלימודים מותאמים
          <br />
          בצורה אידאלית עבורך :)
        </div>
        {profile && <ProfileDetails />}
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
              <div dangerouslySetInnerHTML={{ __html: tooltipLookingForJob }} />
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
              <div dangerouslySetInnerHTML={{ __html: tooltipSendedJobs }} />
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
              <div dangerouslySetInnerHTML={{ __html: tooltipReachMe }} />
            </Tooltip>
          </div>
        </div>
        <div className="bg-[#979797] opacity-20 mx-8 h-[1px]" />
        <UploadedFiles />
      </div>
    </section>
  );
}
