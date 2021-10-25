/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import { useTranslation } from 'next-i18next';
import CameraSvg from '../svg/Camera';
import MaleCrown from '../svg/MaleCrown';
import FemalePic from '../svg/FemalePic';
import MalePic from '../svg/MalePic';
import FemaleCrown from '../svg/FemaleCrown';
import { AppContext } from '../../src/context/state';
import ProfileAPI from '../../src/services/profile.service';
import { SET_PROFILE } from '../../src/context/appReducer';
import Xcircle from '../svg/Xcircle';

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

function ProfileAvatar({ setLoader }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  const { profile, user, dispatch } = useContext(AppContext);
  const { t } = useTranslation('common');

  const updateProfile = async (file) => {
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
    event.stopPropagation();
    setIsDisplay(false);
    setSelectedFile(null);
    const [file] = event.target.files;
    if (!validateImage(file)) {
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
    updateProfile(file);
    event.target.value = '';
  };
  const removeImage = async () => {
    setIsDisplay(false);
    setSelectedFile(null);
    setLoader(true);
    const { data, status } = await ProfileAPI.updateProfile(user.token, {
      avatar: profile.avatar.id, // IF the id are the same then the BE will delete
    });
    if (200 === status && data?.updated_profile) {
      dispatch({ type: SET_PROFILE, profile: data.updated_profile });
    }
    setLoader(false);
  };
  return (
    <>
      <div className="w-[130px] mx-auto relative top-[-45px] z-10">
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
        {!profile.avatar &&
          'm' === profile?.gender &&
          profile.vendor_profile?.completionVeritas && <MaleCrown />}
        {!profile.avatar &&
          'f' === profile?.gender &&
          profile.vendor_profile?.completionVeritas && <FemaleCrown />}
        {!profile.avatar &&
          'f' === profile?.gender &&
          !profile.vendor_profile?.completionVeritas && <FemalePic />}
        {!profile.avatar &&
          'm' === profile?.gender &&
          !profile.vendor_profile?.completionVeritas && <MalePic />}
        <div
          className="relative
          z-10
           cursor-pointer hover:bg-opacity-90 transition
            mr-auto transform translate-y-[-32px] w-10 h-10 border-2
            border-white rounded-full flex justify-center items-center text-white
             bg-gray-300"
          onMouseEnter={() => setIsDisplay(true)}
          //   onMouseLeave={() => setIsDisplay(false)} // MAKE ISSUES WITH INPUT FILE
        >
          <CameraSvg />
          {isDisplay && (
            <div
              className={`${
                isDisplay ? 'z-10 opacity-100' : 'h-0 opacity-0 z-[-1]'
              } text-[#333333] text-right absolute text-sm 
              w-[120px] bg-white top-full border 
              border-gray-300 shadow-sm transition  right-
              0 left-0 mx-auto`}
            >
              <button
                type="button"
                className="flex w-full justify-end  hover:opacity-60 text-left py-2 px-2"
                onClick={() => setIsDisplay(false)}
              >
                <Xcircle className="w-4 h-4" />
              </button>
              <label
                accept="image/jpeg, image/jpg"
                value={selectedFile}
                className="block leading-8 px-3 cursor-pointer hover:opacity-60"
              >
                <input type="file" className="hidden" onChange={addImage} />
                <span>{t('עדכן תמונה')}</span>
              </label>
              {profile.avatar && (
                <button
                  onClick={removeImage}
                  type="button"
                  className="leading-8 px-3 hover:opacity-60"
                >
                  {t('הסר תמונה')}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileAvatar;
