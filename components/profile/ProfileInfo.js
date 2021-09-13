import React, { useContext, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { SET_PROFILE } from '../../src/context/appReducer';
import { AppContext } from '../../src/context/state';
import ProfileAPI from '../../src/services/profile.service';
import HelpInfo from '../popups/HelpInfo';
import CameraSvg from '../svg/Camera';
import FemaleCrown from '../svg/FemaleCrown';
import MaleCrown from '../svg/MaleCrown';
import ProfileDetails from './ProfileDetails';

export default function ProfileInfo() {
  // const [lookingForJob, setLookingForJob] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const { profile, user, dispatch } = useContext(AppContext);

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
    formData.append('caption', `${profile.first_name} ${profile.last_name}`);

    const { data, status } = await ProfileAPI.updateProfileImage(
      user.token,
      formData,
      `${profile.user_nicename}.${file.type.split('/').pop()}`
    );
    if (200 === status && data?.updated_profile) {
      dispatch({ type: SET_PROFILE, profile: data.updated_profile });
    }
    setLoader(false);
    setSelectedFile(null);
  };

  const addImage = (event) => {
    setSelectedFile(null);
    const [file] = event.target.files;

    if (!validateImage(file)) {
      console.log('not valid');
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
    updateProfle(file);
    event.target.value = '';
  };
  const { t } = useTranslation('common');

  if (!profile) return null;
  return (
    <section
      className={`${
        loader ? 'opacity-60' : 'opacity-100'
      } transiton w-[430px] bg-white rounded-[20px] relative mb-18`}
    >
      <HelpInfo className="absolute left-0 top-0 -translate-y-4 -translate-x-2 right-auto cursor-pointer">
        <div className="w-[120px] h-[120px] rounded-full bg-orange  border-white border-2 text-white font-bold text-lg flex flex-col justify-center items-center leading-tight hover:bg-orange-active transition">
          <span>{t('זקוק')}</span>
          <span>להכוונה</span>
          <span>אישית?</span>
        </div>
      </HelpInfo>
      <div className="w-[130px] mx-auto relative top-[-45px]">
        {profile.avatar ? (
          <div className="w-[135px] h-[135px] overflow-hidden mx-auto rounded-full">
            <img
              className="w-full h-full object-cover"
              src={profile.avatar.src}
              width={135}
              height={135}
              loading="lazy"
              alt={profile.first_name}
            />
          </div>
        ) : null}
        {!profile.avatar && 'm' === profile?.gender && <MaleCrown />}
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
      <div className="relative top-[-70px]">
        <h2 className="text-orange font-bold text-[24px] text-center leading-6">
          כל הכבוד!
          <br />
          <span className="text-gray-mid font-bold opacity-70 text-[20px]">
            השלמת את סולם ההתקדמות שלך
          </span>
        </h2>
        <div className="text-gray-mid text-[18px] opacity-70 text-center mb-4 leading-4">
          כל המקצועות ומסלולי הלימודים מותאמים
          <br />
          בצורה אידאלית עבורך :)
        </div>
        {profile && <ProfileDetails />}
        <div className="bg-[#979797] opacity-20 mx-8 h-[1px]" />
      </div>
    </section>
  );
}
