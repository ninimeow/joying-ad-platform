<template>
  <div>
    <div class="item-list">
      <div class="items add" @click="modal1=true">
        <card><Icon type="ios-add-circle" /></card>新增EDM
      </div>
      <items v-for="(item, i) in itemLists" :key="i" :item="item"></items>
    </div>
    <Modal v-model='modal1' title='新建EDM' @on-ok='ok' @on-cancel='cancel'>
      <p><Input v-model="itemName" size="large" placeholder="请输入项目名称..." style="width: 300px" /></p>
    </Modal>
  </div>
</template>

<script>
import Items from '@/components/Items'

export default {
  name: 'H5Template',
  data () {
    return {
      itemLists: [],
      modal1: false,
      itemName: ''
    }
  },
  components: {
    Items
  },
  methods: {
    ok () {
      this.itemLists.push(this.itemName)
      this.itemName = ''
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>

<style scoped>
em{
  font-style: normal;
  line-height: normal;
}
.items{
  flex: 0 0 120px;
  width: 120px;
  margin: 0 20px;
  text-align: center;
  position: relative;
}
.items /deep/ .ivu-card{
  margin: 10px auto;
  height: 100px;
  line-height: 100px;
}
.items /deep/ .ivu-card-body{
  padding: 0;
}
.add .ivu-card-body .ivu-icon{
  font-size: 36px;
  line-height: inherit;
}
.item-list{
  display: flex;
  justify-content: flex-start;
  margin: 20px;
}

</style>
