import request from '@/utils/request'
import qs from 'qs'

export function getData(params) {
  return request({
    url: 'api/self',
    method: 'get',
    params
  })
}

export default { getData }
