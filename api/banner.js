import request from '@/utils/request'
const api_name = '/educms/bannerfront'

export default {
  getListBanner() {
    return request({
      url: `${api_name}/getAllBanner`,
      method: 'get'
    })
  }
}
