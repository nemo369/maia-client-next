import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const ProfileAPI = {
  profile: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      // console.log(error);
      return error.response;
    }
  },
};

export default ProfileAPI;
