<template>
  <div>
    <p>element组件高级，嵌套</p>
    <el-button @click="showFirstDial">第一层弹框</el-button>
    <fi-dia
      :if-dialog-show="isShowFirstDialog"
    >
      ppp
    </fi-dia>
  </div>
</template>

<script>
import fiDia from './firstDialog'

export default {
  name: 'Comps',
  // components 是一个对象
  components: { fiDia },
  data() {
    return {
      isShowFirstDialog: false
    }
  },
  methods: {
    showFirstDial() {
      this.isShowFirstDialog = true
      console.log(this.isShowFirstDialog)
    }
  }
}
</script>

<style scoped>

</style>
