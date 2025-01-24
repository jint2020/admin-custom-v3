/*
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 17:23:05
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-24 10:37:03
 */
export type TokenRequest = {
  username: string;
  password: string;
}

export type ErrorResponse = {
  code: number;
  message: string;
}