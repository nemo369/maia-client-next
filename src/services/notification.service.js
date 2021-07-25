import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const NotificationAPI = {
  notification: async (token) => {
    try {
      const { data } = await axios.get(`${API_URL}/notifications/notifications`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return [];
    }
  },
  full_notification: async (token) => {
    try {
      const { data } = await axios.get(`${API_URL}/notifications/full-notifications`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return error.response;
    }
  },
  clear_notification: async (token, notifications) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/notifications/clear-notifications`,
        { notifications },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return error.response;
    }
  },
};

export default NotificationAPI;
