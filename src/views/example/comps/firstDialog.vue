<template>
  <el-dialog
    title="第一个弹框"
    width="85%"
    :visible.sync="ifDialogShow"
  >
    <p>第一个弹框</p>
    <el-button @click.native.prevent="isShowSecDialAction">显示第二个弹框</el-button>
    <sec-dial
      :if-dialog-show="isShowSecDial"
    >222</sec-dial>
  </el-dialog>
</template>

<script>
import secDial from './secondDialog'
export default {
  name: 'FistDialog',
  components: { secDial },
  props: {
    pkId: {
      type: Number
    },
    ifDialogShow: {
      type: Boolean
    }
  },
  data() {
    return {
      isShowSecDial: false
    }
  },
  methods: {
    isShowSecDialAction() {
      this.isShowSecDial = true
      console.log(this.isShowSecDial)
    }
  }
}
</script>

<style scoped>

</style>
