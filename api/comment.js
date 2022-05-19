import request from '@/utils/request'
export default {
  getPageList(page, limit, courseId) {
    return request({
      url: `/eduservice/commentfront/getCommentPageList/${page}/${limit}`,
      method: 'get',
      params: { courseId }
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/commentfront/auth/save`,
      method: 'post',
      data: comment
    })
  }
}
