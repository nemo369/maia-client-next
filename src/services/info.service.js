import axios from 'axios';
// import { FRONT_URL } from '../utils/consts';

// const SERVER_BASE_URL = `${FRONT_URL}`;

const Infoservice = {
  getStreetInfo: async (cityId) => {
    try {
      const { data } = await axios.post(
        'http://maia-client-wp.test/wp-json/wp/v2/info/street',
        // `${SERVER_BASE_URL}/info/street`,
        // headers: {
        //   Authorization: `Token ${encodeURIComponent(token)}`,
        // },
        { city_id: cityId }
      );
      console.log(data);
      return data;
    } catch (error) {
      return error.response;
    }
  },
};
export default Infoservice;
