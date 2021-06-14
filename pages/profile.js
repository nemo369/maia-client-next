import React from 'react';
import BreadCrumbs from '../components/common/BreadCrumbs';
import ProfileConclusion from '../components/profile/ProfileConclusion';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileNotifications from '../components/profile/ProfileNotifications';
import ProfileFavorite from '../components/profile/ProfileFavorite';

export default function Profile() {
  return (
    <div className="profile">
      <BreadCrumbs breadCrumbs={[{ title: 'משתמש', href: '/profile' }]} />
      <div className="pofile-header text-gray-mid text-[38px] font-black">אזור אישי</div>
      <div className="profile-container">
        <ProfileNotifications />
        <ProfileConclusion />
        <ProfileInfo />
      </div>
      <ProfileFavorite />
    </div>
  );
}
