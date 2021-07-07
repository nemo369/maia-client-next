import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const ProfileAPI = {
  profile: async (token) => {
    try {
      const { data, status } = await axios.get(`${API_URL}/profile`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return { ...data, status };
    } catch (error) {
      // console.log(error);
      return error.response;
    }
  },
};

export default ProfileAPI;
