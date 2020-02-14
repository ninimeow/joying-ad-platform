<template>
  <div class="items" @mouseover="showEdit=true" @mouseleave="showEdit=false">
    <card>
      <Icon type="ios-phone-portrait" />
    </card>
    <card class="option" v-if="showEdit">
      <span>
        <Icon type="md-arrow-dropright" />
        <em>预览</em>
      </span>
      <span>
        <Icon type="ios-create" />
        <em>编辑</em>
      </span>
    </card>{{item}}
  </div>
</template>

<script>
export default {
  name: 'items',
  data () {
    return {
      showEdit: false
    }
  },
  props: {
    item: String
  },
  methods: {
    show () {
      this.showEdit = !this.showEdit
      console.log(this.showEdit)
    }
  }
}
</script>

<style scoped>
em {
  font-style: normal;
  line-height: normal;
}
.items {
  flex: 0 0 120px;
  width: 120px;
  margin: 0 20px;
  text-align: center;
  position: relative;
}
.items /deep/ .ivu-card {
  margin: 10px auto;
  height: 100px;
  line-height: 100px;
}
.items /deep/ .ivu-card-body {
  padding: 0;
}
.items .ivu-card-body .ivu-icon {
  font-size: 46px;
  line-height: inherit;
}
.items .option {
  position: absolute;
  top: 0;
  width: 100%;
  border: none;
  overflow: hidden;
}
.option .ivu-card-body span {
  flex: 0 0 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
.option .ivu-card-body span:hover {
  background: #d7d8d9;
}
.items /deep/ .option .ivu-card-body {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #e6e7e7;
}
.items .option .ivu-card-body .ivu-icon {
  font-size: 24px;
  line-height: 25px;
}
</style>
