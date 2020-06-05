<template>
  <div>
    <P>请求后台的数据</P>
    <el-button v-model="query.name" clearable size="small" placeholder="输入搜索" style="width: 200px;" class="filter-item" @keyup.enter.native="crud.toQuery" />

    <!-- 点击时获取后台数据到表格 -->
    <el-button @click="getDataOfServe">点击获取crud数据</el-button>
    <el-button @click="getData2">点击axios</el-button>
    <el-button @click="getDataOfPa">getDataOfPa</el-button>
    <el-button @click="delTableData">清除数据</el-button>
    <div style="margin: 20px">
      <el-table ref="table" :data="crud.data">
        <el-table-column label="id" prop="id" />
        <el-table-column label="name" prop="name" />
      </el-table>
      <!-- 动态表头的表格 -->
      <el-table :data="tableData" width="100%" border>
        <el-table-column v-for="(item,index) in tableHead" :key="index" :label="item.label" :property="item.property" align="center">
          <template slot-scope="scope">{{ scope.row[scope.column.property] }}</template>
        </el-table-column>
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
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-card>
      <el-card style="margin: 20px">
        <!-- 两栏之间的间隔 -->
        <el-row :gutter="10">
          <!-- :span共分24栏，可等分为多个-->
          <el-col :span="12">
            <img :src="dialogImageUrl" width="100%" alt="">
          </el-col>
          <el-col :span="12">
            <img :src="dialogImageUrl" width="100%" alt="">
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div>
      <!-- 布局学习 -->

      <span class="field-label">方块选择:</span>
      <!-- 选择屏幕框 -->
      <select v-model="selected" @change="selectbj(selected)">
        <option v-for="option in layouts" :key="option" :value="option.value">
          {{ option.name }}
        </option>
      </select>
      <!-- 布局框 -->
      <el-main v-model="selected">
        <div class="block" style="height:400px">
          <!-- {{selected}} -->
          <div v-if="selected==0" style="height:100%;width:100%">
            <!-- 1*1布局 -->
            <el-row :gutter="10" type="flex" class="grid-one-contentheight" justify="center">
              <el-col :span="24" />
            </el-row>
          </div>
          <!-- 2*1布局 -->
          <div v-else-if="selected==1" style="height:100%;width:100%">
            <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="space-between">
              <el-col :span="12"><div class="grid-content " /></el-col>
              <el-col :span="12"><div class="grid-content " /></el-col>
            </el-row>
          </div>
          <!-- 2*2 -->
          <div v-else-if="selected==2" style="height:100%;width:100%">
            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
              <el-col :span="12"><div class="grid-content " /></el-col>
              <el-col :span="12"><div class="grid-content " /></el-col>
            </el-row>
            <br>
            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
              <el-col :span="12"><div class="grid-content " /></el-col>
              <el-col :span="12"><div class="grid-content " /></el-col>
            </el-row>
          </div>
          <!-- 3*2布局 -->
          <div v-else-if="selected==3" style="height:100%;width:100%">
            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
              <el-col :span="12"><div class="grid-content " /></el-col>
              <el-col :span="12"><div class="grid-content " /></el-col>
              <el-col :span="12"><div class="grid-content " /></el-col>
            </el-row>
            <br>
            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
              <el-col :span="12"><div class="grid-content " /></el-col>
              <el-col :span="12"><div class="grid-content " /></el-col>
              <el-col :span="12"><div class="grid-content " /></el-col>
            </el-row>
          </div>
          <!-- 3*3模式 -->
          <div v-else-if="selected==4" style="height:100%;width:100%">
            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
            </el-row>
            <br>
            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
            </el-row>
            <br>
            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
            </el-row>
          </div>
          <!-- 1+5模式 -->
          <div v-else style="height:100%;width:100%">
            <el-row :gutter="10" type="flex" class="row-bg" justify="start">
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
              <el-col :span="8"><div class="grid-a-contentWidth" /></el-col>
            </el-row>
            <br>
            <el-row :gutter="10" type="flex" class="row-bg" justify="start">
              <el-col :span="8">
                <div class="grid-a-contentWidth" />
                <br>
                <div class="grid-a-contentWidth" />
              </el-col>
              <el-col :span="16"><div class="grid-a-content-a-Width" /></el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </div>

    <!-- 下拉列表框 -->
    <div>
      <el-dropdown split-button type="primary" @command="handleCommand">

        <el-input v-model="input" placeholder="请输入内容" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(ce,index) in kuList" :key="index" :command="ce">{{ ce }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- select选择框 -->
    <div>
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <!-- select嵌套tree-->
    <div>
      <el-select v-model="mineStatus" placeholder="请选择" multiple collapse-tags @change="selectChange">
        <el-option :value="mineStatusValue" style="height: auto">
          <!-- option展开高度太小，把height设置为auto就好啦 -->
          <el-tree ref="tree" :data="data" show-checkbox node-key="id" highlight-current :props="defaultProps" @check-change="handleCheckChange" />
        </el-option>
      </el-select>
    </div>
    <!-- select嵌套表单 -->
    <div>
      <el-select v-model="mineStatus" placeholder="请选择" multiple collapse-tags @change="selectChange">
        <el-option :value="mineStatusValue" style="height: auto">
          <!-- option展开高度太小，把height设置为auto就好啦 -->
          <el-form>
            <el-form-item>
              <span>dd</span>
            </el-form-item>
            <el-form-item>
              <span>dd</span>
            </el-form-item>
          </el-form>
        </el-option>
      </el-select>
    </div>
    <div>
      <P>------------------------------------------</P>
      <P>------------------------------------------</P>
      <P>------------------------------------------</P>
      <P>------------------------------------------</P>
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
import dialogImageUrl from '@/assets/images/background.jpg'

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
    const tableHead = []
    /*    element.costInfos.forEach((costInfo, index) => {
      element['costInfos' + index] = costInfo.ruleSmallFee
      costInfo.name = costInfo.weightMin + '~' + costInfo.weightMax
      // 这里是根据数据循环得到的动态的表头
      tableHead.push({ label: costInfo.name, property: `costInfos${index}` }) // 动态表头
    })*/
    // 这里是固定的表头，如果没有可不写
    const anotherTableHead = [
      {
        label: '物流公司',
        property: 'expressName'
      },
      {
        label: '配送地区',
        property: 'areaName'
      }
    ]
    // 合并2部分的表头
    // this.tableHead = [...anotherTableHead, ...tableHead] // 表头信息
    this.tableHead = [
      {
        label: '物流',
        property: 'expressName0'
      },
      {
        label: '配送',
        property: 'areaName0'
      },
      {
        label: '物流公司',
        property: 'expressName'
      },
      {
        label: '配送地区',
        property: 'areaName'
      }
    ] // 表头信息
    return {
      fileList: [],
      uploadUrl: 'http://localhost:8099/api/con/self/upload', // 上传url
      dialogImageUrl: dialogImageUrl,
      // 动态表头
      tableData: [
        { expressName0: 1, areaName0: '2018-07-24', expressName: 23.34, areaName: 137597.76 },
        { expressName0: 2, areaName0: '2018-24', expressName: 2, areaName: 16 }
      ],
      // 布局学习
      selected: 0,
      layouts: [
        { 'name': '1x1模式', 'value': '0' },
        { 'name': '2x1模式', 'value': '1' },
        { 'name': '2x2模式', 'value': '2' },
        { 'name': '3x2模式', 'value': '3' },
        { 'name': '3x3模式', 'value': '4' },
        { 'name': '1+5模式', 'value': '5' }
      ],
      // 下拉列表
      kuList: [
        { ce: 1, index: 2 },
        { ce: 1, index: 2 }
      ],
      // select选择框
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      // select嵌套tree
      mineStatus: '',
      mineStatusValue: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1'
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },

      s: ''
    }
  },
  computed: {
    // 通过计算属性获取token，赋值给header
    headers() {
      return {
        'Authorization': getToken()
      }
    }
  },
  methods: {
    // 点击获取crud数据
    getDataOfServe() {
      console.log('获取token')
      console.log(getToken())
      // 参数
      // get请求的参数
      const params = {}
      // 100ms之后执行里面的方法
      setTimeout(() => {
        crudWgcrud.getData(params).then(res => {
          console.log(res)
          // 对本实例的crud.data赋值一个列表
          this.crud.data = res
          console.log(this.crud.data)
        })
      }, 100)
    },
    getData2() {
      this.$http.post('/api/con/self').then(
        console.log('成功')
      ).catch(
        console.log('失败')
      )
    },

    // 带参数的请求 getDataOfParam
    getDataOfPa() {
      // 参数
      const params = { id: 1 }
      // 100ms之后执行里面的方法
      setTimeout(() => {
        crudWgcrud.getDataOfParam(params).then(res => {
          console.log(res)
          this.crud.data = res
          console.log(this.crud.data)
        })
      }, 100)
    },
    // 清除数据
    delTableData() {
      this.crud.data = null
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
    },
    //  下拉列表组件
    handleClick() {
      alert('button click')
    },
    // 下拉列表点击触发通知
    handleCommand(command) {
      this.$message('click on item ' + command)
    },
    // select嵌套tree
    // select框值改变时候触发的事件
    selectChange(e) {
      var arrNew = []
      var dataLength = this.mineStatusValue.length
      var eleng = e.length
      for (let i = 0; i < dataLength; i++) {
        for (let j = 0; j < eleng; j++) {
          if (e[j] === this.mineStatusValue[i].label) {
            arrNew.push(this.mineStatusValue[i])
          }
        }
      }
      this.$refs.tree.setCheckedNodes(arrNew)// 设置勾选的值
    },
    handleCheckChange() {
      const res = this.$refs.tree.getCheckedNodes(true, true) // 这里两个true，1. 是否只是叶子节点 2. 是否包含半选节点（就是使得选择的时候不包含父节点）
      const arrLabel = []
      const arr = []
      res.forEach(item => {
        arrLabel.push(item.label)
        arr.push(item)
      })
      this.mineStatusValue = arr
      this.mineStatus = arrLabel
      console.log('arr:' + JSON.stringify(arr))
      console.log('arrLabel:' + arrLabel)
    }

  }
}
</script>

<style scoped>
    /*布局学习*/
.box-card{
    width: 400px;
    margin: 20px auto;
}
.block{
    padding: 30px 24px;
    background-color: rgb(27, 16, 16);
}
.alert-item{
    margin-bottom: 10px;
}
.tag-item{
    margin-right: 15px;
}
.link-title{
    margin-left:35px;
}
.components-container {
    position: relative;
    height: 100vh;
}

.left-container {
    background-color: #F38181;
    height: 100%;
}

.right-container {
    background-color: #FCE38A;
    height: 200px;
}

.top-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
}

.bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
}

.left-container-twoOne {
    background-color: rgb(110, 75, 75);
    height: 100%;
}

.container-onetoOne {
    background-color: rgb(47, 80, 74);
    height: 100%;
    width: 50%;
}

.container-onetoTwo {
    background-color: rgb(61, 19, 56);
    height: 100%;
    width: 50%;
}

.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #57926b;
}
.bg-purple {
    background: #7e2970;
}
.bg-purple-light {
    background: #071c4d;
}
.grid-content {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 150px;
    min-width: 100px;
}
.grid-contentB {
    background-color: rgb(64, 56, 134);
    border-radius: 4px;
    min-height: 150px;
    min-width: 100px;
}
.grid-a-contentWidth {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 100px;
}
.grid-a-content-a-Width {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 220px;
}

.grid-one-contentheight {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 100%;
}

.el-row-two {
    margin-bottom: 80px;
    margin-top: 80px;

}

    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }

</style>
