import axios from "axios";
export default function (config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
  })

  return instance(config)
}