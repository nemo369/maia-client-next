import React, { useContext } from 'react';
import { AppContext } from '../../src/context/state';
import SmallHatGreen from '../svg/SmallHatGreen';
import SmallExclamationMarkGreen from '../svg/SmallExclamationMarkGreen';
import SmallBreifcaseGreen from '../svg/SmallBreifcaseGreen';
import { SET_NOTIFICATIONS } from '../../src/context/appReducer';
import NotificationAPI from '../../src/services/notification.service';

const formatDate = (date) => {
  const day = new Date(Number(date)).getDate();

  const mounth = new Date(Number(date)).getMonth() + 1;

  const year = new Date(Number(date)).getFullYear();

  return `${day}.${mounth}.${year}`;
};

export default function ProfileNotifications() {
  const { notifications, dispatch, user } = useContext(AppContext);

  const clearNotifications = async () => {
    dispatch({ type: SET_NOTIFICATIONS, notifications: [] });
    const noteArr = notifications.map((note) => note.id);
    await NotificationAPI.clear_notification(user.token, noteArr);
  };

  const clearNotification = async (id) => {
    const newArr = notifications.filter((note) => note.id !== id);
    dispatch({ type: SET_NOTIFICATIONS, notifications: newArr });
    await NotificationAPI.clear_notification(user.token, [id]);
  };

  return (
    <div className="pofile-notifications w-[300px] rounded-[15px] p-[20px] flex-0-0-auto h-full">
      <div className="pofile-notifications-header dash border-b-[1px] border-dashed border-[#ffffff2f] flex justify-between text-gray-200 items-center">
        <div className="text-[24px] text-white font-black">ההתראות שלי</div>
        <button
          type="button"
          className="text-white text-[12px] opacity-70 cursor-pointer focus:outline-none active:text-gray-200"
          onClick={clearNotifications}
        >
          נקה הכל
        </button>
      </div>
      <div className="profile-body">
        <div className="profile-body-news dash border-b-[1px] border-dashed border-[#ffffff2f]">
          <div className="text-white text-[10px] font-bold p-[5px]">חדשות</div>
          <div>
            <div className="scroller">
              {notifications?.map((content) => (
                <div id={content.id} key={content.id} className="flex justify-between space-x-4">
                  <div className="w-[20px] h-[20px] ml-[12px] mt-[10px]">
                    {'school' === content.type && <SmallHatGreen />}
                    {'job' === content.type && <SmallBreifcaseGreen />}
                    {'job' !== content.type && 'school' !== content.type && (
                      <SmallExclamationMarkGreen />
                    )}
                  </div>
                  <div className="text-white mb-[3px]">
                    <div className="text-[14px]">{content.title}</div>
                    <div className="text-[12px] opacity-70">{formatDate(content.date)}</div>
                  </div>
                  <div>
                    <button
                      className="opacity-50 mr-[20px] w-[12px] h-[12px] border-solid border-white border-[1px] rounded-[50%] text-white text-[10px] text-center cursor-pointer leading-none focus:outline-none active:border-gray-200 active:text-gray-200"
                      type="button"
                      aria-label="סגירה"
                      onClick={() => clearNotification(content.id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-body-sooner">
          <div className="text-white text-[10px] py-[5px]">מוקדם יותר</div>
          <div className="scroller">
            {notifications?.map((content) => (
              <div key={content.id} className="flex justify-between  space-x-4">
                <div className="w-[20px] h-[20px] ml-[12px] mt-[10px]">
                  {'school' === content.type && <SmallHatGreen />}
                  {'job' === content.type && <SmallBreifcaseGreen />}
                  {'job' !== content.type && 'school' !== content.type && (
                    <SmallExclamationMarkGreen />
                  )}
                </div>
                <div className="text-white mb-[3px]">
                  <div className="text-[14px]">{content.title}</div>
                  <div className="text-[12px] opacity-70">{formatDate(content.date)}</div>
                </div>
                <div>
                  <button
                    className=" opacity-50 mr-[20px] w-[12px] h-[12px] border-solid border-white border-[1px] rounded-[50%] text-white text-[10px] text-center cursor-pointer leading-none focus:outline-none active:border-gray-200 active:text-gray-200"
                    type="button"
                    aria-label="סגירה"
                    onClick={() => clearNotification(content.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
