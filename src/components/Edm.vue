<template>
  <div>
    <ul class="item-list">
      <li>
        <card><Icon type="ios-phone-portrait" /></card><Icon type="md-add" />新增EDM
      </li>
      <li>
        <card><Icon type="ios-phone-portrait" /></card>效果制作素材
      </li>
      <li>
        <card><Icon type="ios-phone-portrait" /></card>monitor
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EdmTemplate',
  data () {
    return {}
  }
}
</script>

<style scoped>
.item-list{
  display: flex;
  justify-content: flex-start;
  margin: 20px;
}
.item-list li{
  flex: 0 0 120px;
  width: 120px;
  margin: 0 20px;
  text-align: center;
}
.item-list /deep/ .ivu-card{
  margin: 10px auto;
  height: 100px;
  line-height: 100px;
}
.item-list /deep/ .ivu-card-body{
  padding: 0;
}
.item-list .ivu-card-body .ivu-icon{
  font-size: 46px;
  line-height: inherit;
}
</style>
