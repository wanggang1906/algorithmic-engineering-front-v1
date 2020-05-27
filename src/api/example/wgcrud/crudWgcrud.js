import request from '@/utils/request'
import qs from 'qs'

export function getData(params) {
  return request({
    //url: 'api/self', // 自己的
    //url: '/api/test/self', // 自己的
    url: '/api/sys/test/self', // 自己的
    //url: 'api/dept', // 系统原有的部门管理
    // url中加.do是seo搜索引擎优化的
    method: 'get',
    params
  })
}

export default { getData }
