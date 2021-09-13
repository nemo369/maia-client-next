import { useContext, useEffect, useState } from 'react';
import { SET_PROFILE } from '../../src/context/appReducer';
import { AppContext } from '../../src/context/state';
import Infoservice from '../../src/services/info.service';
import ProfileAPI from '../../src/services/profile.service';
import Inputs from '../common/Inputs';
import SearchStreetInput from './SearchStreetInput';

//   {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
// import SearchCountryInput from './SearchCountryInput';
//   {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
function ProfileDetailsEditStreet({ cities }) {
  //   {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}

  //   const [error, setError] = useState(false);
  //   {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}

  const [cityId, setCityId] = useState(null);
  const [cityData, setCityData] = useState('');
  const [theStreets, setTheStreets] = useState(null);
  const [, setTheStreet] = useState(null);
  const [inputValue, setInputValue] = useState();
  const { profile, user, dispatch } = useContext(AppContext);
  useEffect(() => {
    if (!profile || !profile.street) return;
    const street = JSON.parse(profile.street);
    const city = JSON.parse(profile.city);
    setCityData(city);
    setCityId(street.city_id);
    // setCityId(street.id);
    setTheStreet(street);
    setInputValue(street.label);
  }, [profile]);

  const updateTheStreet = async (street) => {
    setTheStreet(street);
    const { data, status } = await ProfileAPI.updateProfile(user.token, {
      street: JSON.stringify(street),
      city: JSON.stringify(cityData),
      cities,
    });
    if (200 === status && data?.updated_profile) {
      dispatch({ type: SET_PROFILE, profile: data.updated_profile });
    }
  };

  useEffect(() => {
    const getStreets = async () => {
      const data = await Infoservice.getStreetInfo(cityId);
      if (data) {
        setTheStreets(data);
      }
    };
    if (cityId) {
      getStreets();
    }
  }, [cityId]);
  return (
    <div className="w-full flex flex-col mb-3">
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      <Inputs
        type="text"
        status="main"
        className="profile-inputs text-[#717171] opacity-60"
        placeholder="עיר מגורים"
        value={cityData.name}
        disabled
      />
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      {/* <SearchCountryInput
        cityData={cityData}
        setCityId={setCityId}
        setCityData={setCityData}
        cities={cities}
        error={error}
        setError={setError}
        setTheStreet={setTheStreet}
        setInputValue={setInputValue}
      /> */}
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      {/* NOTICE !! for now hide this and just dispaly a disabled input cause i dont want to change the city*/}
      <SearchStreetInput
        theStreets={theStreets}
        setTheStreet={updateTheStreet}
        cityData={cityData}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default ProfileDetailsEditStreet;
