import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTZkNjBmMWEyYjhjNjNmNGE0MjM4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzc3MDg5Mn0.lhEhHL-w_mbFzLt1MFuSsbiuEMbQkWWV6R57YQVR4bk"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});