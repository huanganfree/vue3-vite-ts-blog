import request from '@/utils/request.js'

interface LoginParams {
  username: string;
  password: string;
}

interface RegisterParams {
  username: string;
  password: string;
  email?: string;
  phone?: string;
}

function requestLogin(params: LoginParams) {
  return request({
    url: '/user/login',
    method: 'post',
    data: params
  })
}

function requestRegister(params: RegisterParams) {
  return request({
    url: '/user/register',
    method: 'post',
    data: params
  })
}

export {
  requestLogin,
  requestRegister
} 