import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const VendorAPI = {
  getInstitutions: async (token) => {
    try {
      const { data } = await axios.get(`${API_URL}/vendor/institutions`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return { data: [] };
    }
  },
  getScopes: async (token) => {
    try {
      const { data } = await axios.get(`${API_URL}/vendor/scopes`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return { data: [] };
    }
  },
  getCategorys: async (token, type, query = {}) => {
    const defualtQuery = {
      byUser: true,
    };
    try {
      const { data } = await axios.post(
        `${API_URL}/vendor/${type}`,
        {
          query: {
            ...defualtQuery,
            ...query,
          },
        },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return { data: [] };
    }
  },
  getCategory: async (token, type, id) => {
    try {
      const { data } = await axios.get(`${API_URL}/vendor/${type}?id=${id}`, {
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
};

export default VendorAPI;
