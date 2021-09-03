import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const ProfileAPI = {
  profile: async (token, query = '') => {
    try {
      const { data, status } = await axios.get(`${API_URL}/profile${query}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return { ...data, status };
    } catch (error) {
      if (error.response) {
        return { data: null, status: error.response.status };
      }
      return { data: null, status: 500 };
    }
  },
  updateProfileImage: async (token, formData, filename) => {
    try {
      const { data: image } = await axios.post(`${API_URL}/user/profile-pic`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'image/jpeg',
          'content-disposition': `attachment; filename=${filename}`,
        },
      });
      if (!image || !Number(image.id)) {
        throw new Error('No image :(');
      }
      const newProfile = {
        profile: {
          avatar: Number(image.id),
        },
      };
      const { data, status } = await axios.put(`${API_URL}/profile`, newProfile, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return { ...data, status };
    } catch (error) {
      return { data: null, status: 500 };
    }
  },
  stages: async () => {
    try {
      const { data, status } = await axios.get(`${API_URL}/profile/userStages`);
      return { ...data, status };
    } catch (error) {
      return { data: null, status: 500 };
    }
  },
  updateProfile: async (token, profile) => {
    try {
      const { data, status } = await axios.put(
        `${API_URL}/profile`,
        { profile },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { ...data, status };
    } catch (error) {
      return { data: null, status: 500 };
    }
  },
};

export default ProfileAPI;
