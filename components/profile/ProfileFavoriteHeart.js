import { useContext } from 'react';
import { useTranslation } from 'next-i18next';
import { SET_PROFILE } from '../../src/context/appReducer';
import { AppContext } from '../../src/context/state';
import UserAPI from '../../src/services/user.service';
import Tooltip from '../common/Tooltip';

function ProfileFavoriteHeart({ id, type }) {
  const { user, profile, dispatch } = useContext(AppContext);
  const { t } = useTranslation('common');

  const removeFromFav = async () => {
    const { token } = user;
    const types = profile[type].filter((typ) => +typ.id !== +id);
    dispatch({ type: SET_PROFILE, profile: { ...profile, [type]: types } });
    await UserAPI.toglleFavorites({ id: id.toString(), type, token });
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="21"
        viewBox="0 0 23 21"
        className="mx-2"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill="#FF726B" fillRule="nonzero" transform="translate(-857 -3491)">
            <path d="M868.804 3492.905a6.5 6.5 0 0111.1 4.597 6.5 6.5 0 01-1.906 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 119.194-9.194l.353.353.353-.353z" />
          </g>
        </g>
      </svg>
      <Tooltip
        trigger={
          <button
            type="button"
            onClick={removeFromFav}
            className="hover:opacity-50 transition active:opacity-100 opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mx-2 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        }
      >
        <div>{t('הסר מהמועדפים')}</div>
      </Tooltip>
    </>
  );
}

export default ProfileFavoriteHeart;
