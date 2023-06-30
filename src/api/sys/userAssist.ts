import { defHttp } from '/@/utils/http/axios'
import { Result } from '/#/axios'

/**
 * 账号是否被使用
 */
export function existsUsername(username) {
  return defHttp.get<Result<boolean>>({
    url: `/user/exists-username`,
    params: { username },
  })
}
export function existsUsernameNotId(username, id) {
  return defHttp.get<Result<boolean>>({
    url: `/user/exists-username-not-id`,
    params: { username, id },
  })
}

/**
 * 手机号是否被使用
 */
export function existsPhone(phone) {
  return defHttp.get<Result<boolean>>({
    url: `/user/exists-phone`,
    params: { phone },
  })
}
export function existsPhoneNotId(phone, id) {
  return defHttp.get<Result<boolean>>({
    url: `/user/exists-phone-not-id`,
    params: { phone, id },
  })
}

/**
 * 邮箱是否被使用
 */
export function existsEmail(email) {
  return defHttp.get<Result<boolean>>({
    url: `/user/exists-email`,
    params: { email },
  })
}
export function existsEmailNotId(email, id) {
  return defHttp.get<Result<boolean>>({
    url: `/user/exists-email-not-id`,
    params: { email, id },
  })
}

/**
 * 发送更改手机验证码
 */
export function sendCurrentPhoneChangeCaptcha() {
  return defHttp.post<Result<boolean>>({
    url: `/user/send-current-phone-change-captcha`,
  })
}

/**
 * 校验发送更改手机验证码
 */
export function validateCurrentPhoneChangeCaptcha(captcha) {
  return defHttp.get<Result<boolean>>({
    url: `/user/validate-current-phone-change-captcha`,
    params: { captcha },
  })
}

/**
 * 发送更改手机号验证码
 */
export function sendPhoneChangeCaptcha(phone) {
  return defHttp.post<Result<boolean>>({
    url: `/user/send-phone-change-captcha`,
    params: { phone },
  })
}

/**
 * 校验发送更改手机验证码
 */
export function validatePhoneChangeCaptcha(phone, captcha) {
  return defHttp.get<Result<boolean>>({
    url: `/user/validate-phone-change-captcha`,
    params: { phone, captcha },
  })
}

/**
 * 发送更改邮箱验证码
 */
export function sendCurrentEmailChangeCaptcha() {
  return defHttp.post({
    url: `/user/send-current-email-change-captcha`,
  })
}

/**
 * 验证当前用户发送更改邮箱验证码
 */
export function validateCurrentEmailChangeCaptcha(captcha) {
  return defHttp.get<Result<boolean>>({
    url: `/user/validate-current-change-email-captcha`,
    params: { captcha },
  })
}

/**
 * 发送更改/绑定邮箱验证码
 */
export function sendEmailChangeCaptcha(email) {
  return defHttp.post({
    url: `/user/send-email-change-captcha`,
    params: { email },
  })
}

/**
 * 验证更改/绑定邮箱验证码
 */
export function validateEmailChangeCaptcha(email, captcha) {
  return defHttp.get<Result<boolean>>({
    url: `/user/validate-email-change-captcha`,
    params: { email, captcha },
  })
}

/**
 * 发送找回密码手机验证码
 */
export function sendPhoneForgetCaptcha(phone) {
  return defHttp.post<Result>({
    url: `/user/send-phone-for-get-captcha`,
    method: 'post',
    params: { phone },
  })
}

/**
 * 验证找回密码手机验证码
 */
export function validatePhoneForgetCaptcha(phone, captcha) {
  return defHttp.get<Result<boolean>>({
    url: `/user/validate-phone-for-get-captcha`,
    params: { phone, captcha },
  })
}

/**
 * 根据手机验证码查询账号
 */
export function findUsernameByPhoneCaptcha(phone, captcha) {
  return defHttp.get<Result<string>>({
    url: `/user/find-username-by-phone-captcha`,
    params: { phone, captcha },
  })
}

/**
 * 发送短信登录验证码
 */
export function sendLoginSmsCode(phone) {
  return defHttp.post<Result>({
    url: `/auth/send-sms-captcha`,
    params: { phone },
  })
}
