import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_PATH,
  headers: {
    'Content-Type': 'application/json'
  }
})

export {
  http
}
