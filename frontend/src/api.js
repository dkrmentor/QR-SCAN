import axios from "axios";

const BASE_URL = "http://192.168.0.130:4000";

export const postLogin = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    const token = response.data.data.auth_key;
    localStorage.setItem("token", token); // store the token in local storage

    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postRegister = async (username, email, password, role_id) => {

  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
      username,
      role_id
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const postWorker = async (user_id, controller_id) => {

  const token = localStorage.getItem("token"); // retrieve the token from local storage
  const name = localStorage.getItem("user_name");

  try {
    const response = await axios.post(
      `${BASE_URL}/worker`,
      { name, user_id, controller_id }, // include user_id and controller_id in the data object
      {
        headers: {
          Authorization: `${token}`, // set the Authorization header with the token value
        },
      }
    );

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
        Authorization: `${token}`, // set the Authorization header with the token value
      },
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
        Authorization: `${token}`, // set the Authorization header with the token value
      },
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
        Authorization: `${token}`, // set the Authorization header with the token value
      },
    });
    console.log(response.status);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleUsers = async () => {
  console.log("works");
  try {
    const token = localStorage.getItem("token"); // retrieve the token from local storage
    const userId = localStorage.getItem("user_id")
    console.log(token);

    const response = await axios.get(`${BASE_URL}/user_reputation/${userId}`, {
      headers: {
        Authorization: `${token}`, // set the Authorization header with the token value
      },
    });

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};


export const getAdmins = async () => {
  try {
    const token = localStorage.getItem("token"); // retrieve the token from local storage

    const response = await axios.get(`${BASE_URL}/workers`, {
      headers: {
        Authorization: `${token}`, // set the Authorization header with the token value
      },
    });

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleWorker = async () => {

  try {
    const token = localStorage.getItem("token"); // retrieve the token from local storage
    const userId = localStorage.getItem("user_id");
    const response = await axios.get(`${BASE_URL}/workers/${userId}`, {
      headers: {
        Authorization: `${token}`, // set the Authorization header with the token value
      },
    });

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};