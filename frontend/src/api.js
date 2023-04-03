import axios from 'axios';

const BASE_URL = 'http://192.168.0.136:4000';

export const postLogin = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    const token = response.data.data[0].auth_key;
    localStorage.setItem("token", token); // store the token in local storage
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postRegister = async (username, email, password, role_id) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { email, password, username, role_id });

    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getNotifications = async () => {
  try {
    const token = localStorage.getItem("token"); // retrieve the token from local storage
    const response = await axios.get(`${BASE_URL}/getnotification`, {
      headers: {
        Authorization: `${token}` // set the Authorization header with the token value
      }
    });
    console.log(response.status);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersList = async () => {
  try {
    const token = localStorage.getItem("token"); // retrieve the token from local storage
    const response = await axios.get(`${BASE_URL}/users`, {
      headers: {
        Authorization: `${token}` // set the Authorization header with the token value
      }
    });
    console.log(response.status);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async () => {
  try {
    const token = localStorage.getItem("token"); // retrieve the token from local storage
    console.log(token);
    const response = await axios.get(`${BASE_URL}/user_reputation`, {
      headers: {
        Authorization: `${token}` // set the Authorization header with the token value
      }
    });
    console.log(response.status);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
