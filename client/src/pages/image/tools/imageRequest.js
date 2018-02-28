import axios from '@/config/axios'

export default {
  imageRequest_get_chest () {
    return axios().get('/image/request/get/chest')
  },

  imageRequest_post_limit (data) {
    return axios().post('/image/request/post/limit', data)
  }
}
