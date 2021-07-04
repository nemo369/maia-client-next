import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

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
      const response = await axios.post(`${API_URL}/user/login`, JSON.stringify(creditiontals), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  toglleFavorites: async ({ id, type, value, token }) => {
    try {
      const response = await axios.post(
        `${API_URL}/profile/toglle-favorites`,
        {
          id,
          type,
          value,
        },
        {
          headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  magicLogin: async (creditiontals) => {
    try {
      const response = await axios.post(
        `${API_URL}/user/magic-link`,
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

  phoneVerification: async ({ phone, pin }) => {
    try {
      const response = await axios.get(
        `${API_URL}/user/login-with-phone?phone=${phone}&pin=${+pin}`,
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
      const response = await axios.post(`${API_URL}/user/register`, JSON.stringify(user), {
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
