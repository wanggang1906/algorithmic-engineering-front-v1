<!-- 搜索与重置按钮组件 -->
<template>
  <span>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="crud.toQuery">搜索</el-button>
    <el-button v-if="crud.optShow.reset" class="filter-item" size="mini" type="warning" icon="el-icon-refresh-left" @click="crud.resetQuery()">重置</el-button>
  </span>
</template>
<script>
import { crud } from '@crud/crud'
export default {
  mixins: [crud()],
  props: {
    // 非必须的参数
    itemClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
