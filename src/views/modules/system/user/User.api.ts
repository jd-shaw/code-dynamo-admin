import { defHttp } from '/@/utils/http/axios'
import { PageResult, Result } from '/#/axios'
import { BaseEntity } from '/#/web'

/**
 * 分页
 */
export function page(params) {
  return defHttp.get<Result<PageResult<UserInfo>>>({
    url: '/user/admin/page',
    params,
  })
}

/**
 * 获取单条
 */
export function get(id) {
  return defHttp.get<Result<UserInfo>>({
    url: '/user/admin/find-by-id',
    params: { id },
  })
}

/**
 * 添加
 */
export function add(obj) {
  return defHttp.post({
    url: '/user/admin/add',
    data: obj,
  })
}

/**
 * 更新
 */
export function update(obj) {
  return defHttp.post({
    url: '/user/admin/update',
    data: obj,
  })
}

/**
 * 查询全部
 */
export function findAll() {
  return defHttp.get<Result<Array<UserInfo>>>({
    url: '/user/admin/find-all',
  })
}
/**
 * 重置密码
 */
export function restartPassword(userId, newPassword) {
  return defHttp.post({
    url: '/user/admin/restart-password',
    params: { userId, newPassword },
  })
}

/**
 * 锁定用户
 */
export function lockUser(userId) {
  return defHttp.post({
    url: '/user/admin/lock',
    params: { userId },
  })
}

/**
 * 锁定用户 批量
 */
export function lockUserBatch(userIds) {
  return defHttp.post({
    url: '/user/admin/lock-batch',
    data: userIds,
  })
}

/**
 * 解锁用户
 */
export function unlockUser(userId) {
  return defHttp.post({
    url: '/user/admin/unlock',
    params: { userId },
  })
}

/**
 * 解锁用户
 */
export function unlockUserBatch(userIds) {
  return defHttp.post({
    url: '/user/admin/unlock-batch',
    data: userIds,
  })
}

/**
 * 用户信息
 */
export interface UserInfo extends BaseEntity {
  // 名称
  name: string
  // 账号
  username: string
  // 密码
  password?: string
  // 确认密码
  confirmPassword?: string
  // 手机号
  phone?: string
  // 邮箱
  email?: string
  // 关联终端
  clientIds?: string
  clientIdList?: string[]
  // 注册来源
  source?: string
  // 是否超级管理员
  admin?: boolean
  // 注册时间
  registerTime?: string
  // 账号状态
  status?: number
}
