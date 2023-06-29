import { defHttp } from '/@/utils/http/axios'
import { PageResult, Result } from '/#/axios'
import { BaseEntity } from '/#/web'

/**
 * 分页
 */
export const page = (params) => {
  return defHttp.get<Result<PageResult<DataScope>>>({
    url: '/data/scope/page',
    params,
  })
}

/**
 * 获取单条
 */
export const get = (id) => {
  return defHttp.get<Result<DataScope>>({
    url: '/data/scope/find-by-id',
    params: { id },
  })
}

/**
 * 添加
 */
export const add = (obj: DataScope) => {
  return defHttp.post({
    url: '/data/scope/add',
    data: obj,
  })
}

/**
 * 更新
 */
export const update = (obj: DataScope) => {
  return defHttp.post({
    url: '/data/scope/update',
    data: obj,
  })
}

/**
 * 删除
 */
export const del = (id) => {
  return defHttp.delete({
    url: '/data/scope/delete',
    params: { id },
  })
}

/**
 * 查询全部
 */
export const findAll = () => {
  return defHttp.get<Result<Array<DataScope>>>({
    url: '/data/scope/find-all',
  })
}

/**
 * 编码是否被使用
 */
export function existsByCode(code: string) {
  return defHttp.get<Result<boolean>>({
    url: '/data/scope/exists-by-code',
    params: { code },
  })
}
export function existsByCodeNotId(code, id) {
  return defHttp.get<Result<boolean>>({
    url: '/data/scope/exists-by-code-not-id',
    params: { code, id },
  })
}

/**
 * 名称是否被使用
 */
export function existsByName(name: string) {
  return defHttp.get<Result<boolean>>({
    url: '/data/scope/exists-by-name',
    params: { name },
  })
}
export function existsByNameNotId(name: string, id) {
  return defHttp.get<Result<boolean>>({
    url: '/data/scope/exists-by-name-not-id',
    params: { name, id },
  })
}

/**
 * 获取关联部门id
 */
export function getDeptIds(id) {
  return defHttp.get<Result<string[]>>({
    url: '/data/scope/get-dept-ids',
    params: { id },
  })
}

/**
 * 保存关联部门
 */
export function saveDeptAssign(obj) {
  return defHttp.post({
    url: '/data/scope/save-dept-assign',
    data: obj,
  })
}

/**
 * 获取关联的用户列表
 */
export function findUsersByDataScopeId(id) {
  return defHttp.get<Result<DataScopeUser[]>>({
    url: '/data/scope/find-users-by-data-scope-id',
    params: { id },
  })
}

/**
 * 保存关联用户权限
 */
export function saveUserAssign(obj) {
  return defHttp.post({
    url: '/data/scope/save-user-assign',
    data: obj,
  })
}

/**
 * 批量删除关联用户权限
 */
export function deleteBatchUserAssign(obj) {
  return defHttp.delete({
    url: '/data/scope/delete-user-assigns',
    data: obj,
  })
}

/**
 * 数据范围权限
 */
export interface DataScope extends BaseEntity {
  // 编码
  code?: string
  // 名称
  name?: string
  // 类型
  type?: number
  // 说明
  remark?: string
}

/**
 * 用户数据范围权限详细信息
 */
export interface DataScopeUser extends BaseEntity {
  //用户id
  userId: string
  //用户名称
  name: string
  //用户账号
  username: string
}
