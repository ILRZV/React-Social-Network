import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1c09534b-45f1-4b87-95dd-0212c239967f",
  },
});

export const getUsers = (currentPage = 1, pageSize = 5) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const deleteFollowUser = (id = 10) => {
  return instance.delete(`follow/${id}`).then((response) => response.data);
};

export const postFollowUser = (id) => {
  return instance.post(`follow/${id}`, {}).then((response) => response.data);
};

export const getAuthMe = () => {
  return instance.get(`auth/me`).then((response) => response.data.data);
};

export const getUserProfile = (id) => {
  return instance.get(`profile/${id}`).then((response) => response.data);
};

export const getUserStatus = (id) => {
  return instance.get(`profile/status/${id}`).then((response) => response.data);
};
