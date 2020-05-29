import request from '@/utils/request'
import qs from 'qs'

export function getData(params) {
  return request({
    //url: 'api/self/', // 自己的xyz-controller
    //url: '/api/test/self', // 自己的xyz-text
    //url: '/api/con/self/cal', // 自己的xyz-con,BTestController03
    url: '/api/con/self05', // 自己的xyz-con,BTestController03
    //url: '/api/sys/test/self/', // 自己的，在sys模块中的 --- 这个可以，其他的可能是后端没有bean
    //url: '/api/sys/test/self', // 这个也是可以的
    //url: 'api/dept', // 系统原有的部门管理
    // url中加.do是seo搜索引擎优化的
    method: 'get',
    params
  })
}

export default { getData }
