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
      const { data } = await axios.post(
        `${SERVER_BASE_URL}/user/login`,
        JSON.stringify(creditiontals),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return data;
    } catch (error) {
      return error.response;
    }
  },
  register: async (
    username,
    email,
    password,
    fullName,
    phone,
    city,
    age,
    gender,
    employment_Coefficient,
    terms_and_Conditions
  ) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user/register`,
        JSON.stringify({
          user: {
            username,
            email,
            password,
            fullName,
            phone,
            city,
            age,
            gender,
            employment_Coefficient,
            terms_and_Conditions,
          },
        }),
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

export default UserAPI;
