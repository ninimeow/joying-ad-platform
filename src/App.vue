
<template>
  <div class="layout">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :width="256" >
      <div class="sider">
        <div class="logo"></div>
        <Menu active-name="1-2" theme="dark" width="auto" @on-select="select" :class="menuitemClasses">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-apps"></Icon><span>营销活动管理</span>
            </template>
            <div class="sub-menu">
              <MenuItem name="1-1">EDM</MenuItem>
              <MenuItem name="1-2">营销活动</MenuItem>
            </div>
          </Submenu>
        </Menu>
      </div>
    </Sider>
    <Layout>
      <Header class="header">
        <div class="header-content" :style="{width: headWidth}">
          <div>
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="ios-arrow-dropleft" size="24"/>
            <Breadcrumb>
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem to="/">Components</BreadcrumbItem>
              <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="i-layout-header-right">
            <span>
              <Icon type="ios-contact" />管理员
            </span>
          </div>
        </div>
      </Header>
      <Content>
        <Card>
          <div style="height: 600px">Content</div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },
    menuitemClasses () {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    },
    headWidth () {
      return this.isCollapsed ? 'calc(100% - 78px)' : 'calc(100% - 256px)'
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    select () {
    }
  }
}
</script>

<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.ivu-layout-sider, .ivu-menu-dark,
.ivu-menu-dark.ivu-menu-vertical /deep/ .ivu-menu-opened .ivu-menu-submenu-title,
.ivu-menu-dark.ivu-menu-vertical /deep/ .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-vertical /deep/ .ivu-menu-submenu-title:hover {
  background: #191a23;
}
.ivu-layout-sider{
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  flex: 0 0 256px;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened{
  background: #101117;
}
.collapsed-menu span{
  font-size: 0px;
}
.collapsed-menu .ivu-icon{
  font-size: 24px;
  transition: font-size .2s ease;
}
.collapsed-menu /deep/ .ivu-icon-ios-arrow-down:before{
  content: "";
}
.collapsed-menu .sub-menu{
  position: absolute;
  left: 80px;
  top: -70px;
  background: #101117;
  border-radius: 3px;
  overflow: hidden;
  width: 150px;
}
.collapsed-menu /deep/ .ivu-menu-vertical .ivu-menu-item{
  padding-left: 15px;
}
.header {
  background: #fff;
  height: 64px;
  padding: 0;
}
.header-content{
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: fixed;
  z-index: 9;
  display: flex;
  justify-content: space-between;

}
.ivu-breadcrumb{
  margin-left: 20px;
  display: inline-block;
}
.i-layout-header-right {
  height: 64px;
  padding-right: 20px;
}
.ivu-layout{
  background: #f5f7f9;
  flex: auto;
}
.logo {
  height: 63px;
  line-height: 63px;
  text-align: center;
  overflow: hidden;
}
/deep/ .ivu-card-bordered{
  border: none;
  background: none;
}
/deep/ .ivu-card-bordered:hover{
  box-shadow: none;
}
/deep/ .ivu-card-body{
  background: #fff;
  margin: 20px;
}
.menu-icon{
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-180deg);
}
</style>
