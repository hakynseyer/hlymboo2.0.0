import axios from '@/config/axios'

export default {
  loginUser (data) {
    return axios().post('/login', data)
  }
}
