import axios from "axios";
import { FRONT_URL } from "../utils/consts";

const SERVER_BASE_URL = `${FRONT_URL}`;

const UserAPI = {
  current: async () => {
    const user = window.localStorage.getItem("user");
    const token = user?.token;
    try {
      const response = await axios.get(`/user`, {
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
    const response = await axios.post(
      `${SERVER_BASE_URL}/user/login`,
      JSON.stringify(creditiontals),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;

  },
  register: async (username, email, password) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/users`,
        JSON.stringify({ user: { username, email, password } }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
}

export default UserAPI;