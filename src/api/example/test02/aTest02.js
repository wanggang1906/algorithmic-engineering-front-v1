import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/aTest02',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/aTest02/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/aTest02',
    method: 'put',
    data
  })
}

export default { add, edit, del }
