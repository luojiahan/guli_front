import request from '@/utils/request'
export default {
  // 1、创建订单
  createOrder(courseId) {
    return request({
      url: '/eduorder/order/createOrder/' + courseId,
      method: 'post'
    })
  },
  // 2、根据id获取订单
  getOrderInfo(courseId) {
    return request({
      url: '/eduorder/order/getOrderInfo/' + courseId,
      method: 'get'
    })
  },
  // 3、生成微信支付二维码
  createNative(orderNo) {
    return request({
      url: '/eduorder/paylog/createNative/' + orderNo,
      method: 'get'
    })
  },
  // 4、根据id获取订单支付状态
  queryPayStatus(orderNo) {
    return request({
      url: '/eduorder/paylog/queryPayStatus/' + orderNo,
      method: 'get'
    })
  }
}
