import client from "./client";

// 로그인
export const login = ({ id, password }) =>
  client.post(`/user/login`, { id, password });

// 회원가입
export const register = ({ id, nickname, password }) =>
  client.post(`/user/register`, { id, nickname, password });
