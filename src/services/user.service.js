import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const SERVER_BASE_URL = `${FRONT_URL}`;

const UserAPI = {
  current: async () => {
    try {
      const response = await axios.post('/user', {
        headers: {
          Authorization: `Token ${encodeURIComponent(token)}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  login: async (creditiontals) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user/login`,
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
  emailLogin: async (email) => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/user/magic-link?email=${email}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },

  ///////אפשר למחוק את זה נכון? ////////////
  phoneLogin: async (phone) => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/user/magic-link?phone=${phone}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  phoneVerification: async (creditiontals) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user/login`,
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
  register: async (user) => {
    try {
      const response = await axios.post(`${SERVER_BASE_URL}/user/register`, JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default UserAPI;
