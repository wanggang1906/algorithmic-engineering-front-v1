<template>
  <div>
    <P>请求后台的数据</P>
    <el-button v-model="query.name" clearable size="small" placeholder="输入搜索" style="width: 200px;" class="filter-item" @keyup.enter.native="crud.toQuery" />

    <!-- 点击时获取后台数据到表格 -->
    <el-button @click="getDataOfServe">点击获取数据</el-button>
    <el-button @click="getData">点击axios</el-button>
    <div style="margin: 20px">
      <el-table
        ref="table"
        :data="crud.data"
      >
        <el-table-column label="id" prop="id" />
        <el-table-column label="name" prop="name" />
      </el-table>
    </div>
    <!-- 图片上传区 -->
    <div>
      <!-- 加入外边距 -->
      <el-card style="margin: 20px">
        <el-upload
          class="upload-demo"
          :action="uploadUrl"
          :headers="headers"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <!-- 自动上传 -->
          <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-card>
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

import { getToken } from '@/utils/auth'

const defaultForm = { id: null, name: null }
export default {
  name: 'Wgcrud',
  cruds() {
    // url是页面首次进入时发起的请求
    return CRUD({ title: '测试', url: '/api/con/self', crudMethod: { ...crudWgcrud }})
  },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  data() {
    return {
      fileList: [],
      uploadUrl: 'http://localhost:8099/api/con/self/upload', // 上传url
      headers: {
        'Authorization': getToken()
      },
      s: ''
    }
  },
  computed: {

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
    getData() {
      this.$http.post('/api/con/self').then(
        console.log('成功')
      ).catch(
        console.log('失败')
      )
    },
    [CRUD.HOOK.beforeRefresh]() {
      const query = this.query
      if (query.type && query.value) {
        this.crud.params[query.type] = query.value
      }
      return true
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // 上传提交按钮
    submitUpload() {
      this.$refs.upload.submit()
      console.log('点击提交')
    }
  }
}
</script>

<style scoped>

</style>
