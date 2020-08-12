import client from "./client";

// 로그인
export const login = ({ username, password }) =>
  client.post(`/users`, { username, password });

// 회원가입
export const register = ({ username, nickname, password }) =>
  client.post(`/users`, { username, nickname, password });
