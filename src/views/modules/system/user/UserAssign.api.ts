import { defHttp } from '/@/utils/http/axios'
import { PageResult, Result } from '/#/axios'
import { BaseEntity } from '/#/web'
import { Role } from "/@/views/modules/system/role/Role.api";
import { DataScope } from "/@/views/modules/system/scope/DataScope.api";
import { Dept } from "/@/views/modules/system/dept/Dept.api";

/**
 * 获取用户拥有部门id集合
 */
export function findDeptIdsByUser(id) {
  return defHttp.get<Result<string[]>>({
    url: `/user/dept/find-ids-by-user`,
    params: { id },
  })
}

/**
 * 获取用户拥有部门集合
 */
export function getDeptList(id) {
  return defHttp.get<Result<Dept[]>>({
    url: `/user/dept/find-all-by-user`,
    params: { id },
  })
}

/**
 * 添加用户部门关联关系
 */
export function addUserDept(data) {
  return defHttp.post({
    url: `/user/dept/save-assign`,
    data: data,
  })
}

/**
 * 添加用户部门关联关系 批量
 */
export function addUserDeptBatch(data) {
  return defHttp.post({
    url: `/user/dept/save-assign-batch`,
    data: data,
  })
}

/**
 * 获取用户拥有角色id集合
 */
export function getRoleIds(id) {
  return defHttp.get<Result<string[]>>({
    url: `/user/role/find-role-ids-by-user`,
    params: { id },
  })
}

/**
 * 获取用户拥有角色集合
 */
export function getRoles(id) {
  return defHttp.get<Result<Role[]>>({
    url: `/user/role/find-roles-by-user`,
    params: { id },
  })
}

/**
 * 添加用户角色关联关系
 */
export function addUserRole(data) {
  return defHttp.post({
    url: `/user/role/save-assign`,
    data: data,
  })
}

/**
 * 添加用户角色关联关系 批量
 */
export function addUserRoleBatch(data) {
  return defHttp.post({
    url: `/user/role/save-assign-batch`,
    data: data,
  })
}

/**
 * 获取用户拥有数据权限id集合
 */
export function getDataScopeIdByUser(id) {
  return defHttp.get<Result<string>>({
    url: `/user/data/scope/find-data-scope-id-by-user`,
    params: { id },
  })
}

/**
 * 获取用户拥有数据权限集合
 */
export function getDataScopeByUser(id) {
  return defHttp.get<Result<DataScope>>({
    url: `/user/data/scope/find-data-scope-by-user`,
    params: { id },
  })
}

/**
 * 添加用户数据权限关联关系
 */
export function addUserDataScope(data) {
  return defHttp.post({
    url: `/user/data/scope/save-assign`,
    data: data,
  })
}

/**
 * 添加用户数据权限关联关系 批量
 */
export function addUserDataScopeBatch(data) {
  return defHttp.post({
    url: `/user/data/scope/save-assign-batch`,
    data: data,
  })
}
