import request from '@/utils/request'
import qs from 'qs'

export function getData(params) {
  return request({
    url: 'api/self',
    // url中加.do是seo搜索引擎优化的
    method: 'get',
    params
  })
}

export default { getData }
