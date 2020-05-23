import request from '@/utils/request'
import qs from 'qs'
// qs是前端的一个库，主要用来处理url,如
// qs.stringify()将对象序列化成URL的形式，以？或&进行拼接
// 前端传递的数据为一个对象时，可使用此方法转成字符串，从而可以用get方法请求

// 请求数据
export function initData(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get'
  })
}

export function download(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get',
    responseType: 'blob'
  })
}
