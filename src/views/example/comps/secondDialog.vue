<template>
  <el-dialog
    title="第二个弹框"
    width="80%"
    :visible.sync="ifDialogShow"
    append-to-body
  >
    <p>第二个弹框</p>
  </el-dialog>
</template>

<script>
export default {
  name: 'SecondDialog',
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
    }
  }
}
</script>

<style scoped>

</style>
