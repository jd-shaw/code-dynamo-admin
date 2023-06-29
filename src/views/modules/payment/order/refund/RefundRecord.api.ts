import { defHttp } from '/@/utils/http/axios'
import { PageResult, Result } from '/#/axios'
import { BaseEntity } from '/#/web'

/**
 * 分页
 */
export function page(params) {
  return defHttp.get<Result<PageResult<RefundRecord>>>({
    url: '/pay/refund/page',
    params,
  })
}

/**
 * 获取单条
 */
export function get(id) {
  return defHttp.get<Result<RefundRecord>>({
    url: '/pay/refund/findById',
    params: { id },
  })
}

/**
 * 退款记录
 */
export interface RefundRecord extends BaseEntity {
  // 支付记录id
  paymentId?: string
  // 关联业务id
  businessId?: string
  // 异步方式关联退款请求号
  refundRequestNo?: string
  // 用户id
  userId?: string
  // 标题
  title?: string
  // 金额
  amount?: number
  // 剩余可退款金额
  refundableBalance?: number
  // 可退款信息
  refundableInfo?: RefundableInfo[]
  // 退款状态
  refundStatus?: number
  // 支付时间
  refundTime?: string
  // 客户ip
  clientIp?: string
  // 错误码
  errorCode?: string
  // 错误信息
  errorMsg?: string
}

/**
 * 可退款信息
 */
export interface RefundableInfo {
  // 支付通道
  payChannel?: number
  // 金额
  amount?: number
}
