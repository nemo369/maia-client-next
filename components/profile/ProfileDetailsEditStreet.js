import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../src/context/state';
import Infoservice from '../../src/services/info.service';
import SearchCountryInput from './SearchCountryInput';
import SearchStreetInput from './SearchStreetInput';

function ProfileDetailsEditStreet({ cities }) {
  const [cityId, setCityId] = useState(null);
  const [cityData, setCityData] = useState('');
  const [theStreets, setTheStreets] = useState(null);
  const [theStreet, setTheStreet] = useState(null);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState();
  const { profile } = useContext(AppContext);
  useEffect(() => {
    if (!profile || !profile.street) return;
    const street = JSON.parse(profile.street);
    const city = JSON.parse(profile.city);
    console.log(street);
    setCityData(city);
    setCityId(street.city_id);
    setCityId(street.id);
    setTheStreet(street);
  }, [profile]);

  useEffect(() => {
    const getStreets = async () => {
      const data = await Infoservice.getStreetInfo(cityId);
      if (data) {
        setTheStreets(data);
      }
    };
    if (cityId) {
      //   getStreets();
    }
  }, [cityId]);
  return (
    <div className="w-full flex flex-col gap-y-3 mb-3">
      <SearchCountryInput
        cityData={cityData}
        setCityId={setCityId}
        setCityData={setCityData}
        cities={cities}
        error={error}
        setError={setError}
        setTheStreet={setTheStreet}
        setInputValue={setInputValue}
      />
      <SearchStreetInput
        theStreets={theStreets}
        setTheStreet={setTheStreet}
        cityData={cityData}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default ProfileDetailsEditStreet;
