import { defHttp } from '/@/utils/http/axios'
import { PageResult, Result } from '/#/axios'
import { BaseEntity } from '/#/web'

/**
 * 分页
 */
export const page = (params) => {
  return defHttp.get<Result<PageResult<Client>>>({
    url: '/client/page',
    params,
  })
}

/**
 * 获取单条
 */
export const get = (id) => {
  return defHttp.get<Result<Client>>({
    url: '/client/find-by-id',
    params: { id },
  })
}

/**
 * 添加
 */
export const add = (obj: Client) => {
  return defHttp.post({
    url: '/client/add',
    data: obj,
  })
}

/**
 * 更新
 */
export const update = (obj: Client) => {
  return defHttp.post({
    url: '/client/update',
    data: obj,
  })
}

/**
 * 删除
 */
export const del = (id) => {
  return defHttp.delete({
    url: '/client/delete',
    params: { id },
  })
}

/**
 * 查询全部
 */
export const findAll = () => {
  return defHttp.get<Result<Array<Client>>>({
    url: '/client/find-all',
  })
}

/**
 * 编码是否被使用
 */
export const existsByCode = (code: string) => {
  return defHttp.get<Result<boolean>>({
    url: '/client/exists-by-code',
    method: 'GET',
    params: { code },
  })
}
export const existsByCodeNotId = (code: string, id) => {
  return defHttp.get<Result<boolean>>({
    url: '/client/exists-by-code-not-id',
    params: { code, id },
  })
}

/**
 * 终端
 */
export interface Client extends BaseEntity {
  // 编码
  code: string
  // 名称
  name: string
  // 是否系统内置
  isSystem: number
  // 是否可用
  enable: number
  // 关联登录方式
  loginTypeIdList: Array<string> | undefined | null
  // 描述
  description: string
}
