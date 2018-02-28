import axios from '@/config/axios'

export default {
  uploadBasicImage (data) {
    return axios().post('/image/upload_basic', data)
  }
}
