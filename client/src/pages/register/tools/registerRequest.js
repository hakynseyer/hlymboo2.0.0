import axios from '@/config/axios'

export default {
  newUser (data) {
    return axios().post('/register/new', data)
  }
}
