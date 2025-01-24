/*
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 17:21:33
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-24 16:43:44
 */
import type { TokenRequest } from "@/api/types"
import request from '@/api/request'
const createToken = (tokenRequest: TokenRequest): Promise<string> => {
  return request.post('/tokens', tokenRequest)
}

export default {
  createToken,
}
