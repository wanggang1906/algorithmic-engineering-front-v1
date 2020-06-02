<template>
  <div>
    <P>请求后台的数据</P>
    <el-button v-model="query.name" clearable size="small" placeholder="输入搜索" style="width: 200px;" class="filter-item" @keyup.enter.native="crud.toQuery" />

    <!-- 点击时获取后台数据到表格 -->
    <el-button @click="getDataOfServe">点击获取数据</el-button>
    <div>
      <el-table
        ref="table"
        :data="crud.data"
      >
        <el-table-column label="id" prop="id" />
        <el-table-column label="name" prop="name" />
      </el-table>
    </div>
  </div>
</template>

<script>
import crudWgcrud from '@/api/example/wgcrud/crudWgcrud'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'

import request from '@/utils/request'

const defaultForm = { id: null, name: null }

export default {
  name: 'Wgcrud',
  cruds() {
    return CRUD({ title: '测试', url: 'api/self', crudMethod: { ...crudWgcrud }})
  },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  data() {
    return {

    }
  },
  methods: {
    // 获取后台数据
    getDataOfServe(resolve) {
      const params = {}
      setTimeout(() => {
        crudWgcrud.getData(params).then(res => {
          resolve(res.content)
        })
      }, 100)
    },
    [CRUD.HOOK.beforeRefresh]() {
      const query = this.query
      if (query.type && query.value) {
        this.crud.params[query.type] = query.value
      }
      return true
    }
  }
}
</script>

<style scoped>

</style>
