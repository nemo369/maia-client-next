import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const Infoservice = {
  getStreetInfo: async (cityId) => {
    try {
      const { data } = await axios.get(`${API_URL}/user/fetch-city?cityid=${cityId}`);
      return data;
    } catch (error) {
      return error.response;
    }
  },
  getBanner: async () => {
    try {
      const { data } = await axios.get(`${API_URL}/info/banner`);
      return data;
    } catch (error) {
      return error.response;
    }
  },
  contactUs: async (creditiontals) => {
    try {
      const response = await axios.post(
        `${API_URL}/info/contact-us`,
        JSON.stringify(creditiontals),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
export default Infoservice;
