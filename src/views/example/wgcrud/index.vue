<template>
  <div>
    <P>请求后台的数据</P>
    <el-button v-model="query.name" clearable size="small" placeholder="输入搜索" style="width: 200px;" class="filter-item" @keyup.enter.native="crud.toQuery" />

    <div>
      <el-table
        :data="crud.data"
        style="width: 100%"
        :load="getDataOfServe"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
import crudDept from '@/api/system/dept'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'

import request from '@/utils/request'

// const defCrud = {}

export default {
  name: 'Wgcrud',
  cruds() {
    return CRUD({ title: '测试', url: 'api/self', crudMethod: { ...crudDept }})
  },
  data() {
    return {

    }
  },
  methods: {
    // 获取后台数据
    getDataOfServe(resolve) {
      const params = { }
      setTimeout(() => {
        this.getQuestType(params).then(res => {
          resolve(res.content)
        })
      }, 100)
    },
    // 请求方式
    getQuestType(params) {
      return request({
        url: 'api/dept',
        method: 'get',
        params
      })
    }
  }
}
</script>

<style scoped>

</style>
