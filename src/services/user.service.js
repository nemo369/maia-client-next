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
      return { data: error, status: 500 };
    }
  },
  toglleFavorites: async ({ id, type, token }) => {
    try {
      const { data, status } = await axios.post(
        `${API_URL}/profile/toglle-favorites`,
        {
          id: `${id}`,
          type,
        },
        {
          headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
        }
      );
      return { ...data, status };
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  magicLogin: async (credentials) => {
    try {
      const { data, status } = await axios.post(
        `${API_URL}/user/magic-link`,
        JSON.stringify(credentials),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return { data, status };
    } catch (error) {
      return error.response;
    }
  },

  emailVerification: async ({ email, password }) => {
    try {
      const response = await axios.get(
        `${API_URL}/user/login-with-email?email=${email}&password=${password}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response;
    } catch ({ response }) {
      return { data: response.data, status: response.status };
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
      const { data, status } = await axios.post(`${API_URL}/user/register`, JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return { ...data, status };
    } catch (error) {
      return error.response;
    }
  },
};

export default UserAPI;
