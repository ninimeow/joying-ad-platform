
<template>
  <div class="layout">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :width="256" :style="{position: 'fixed', height: '100vh', left: 0, 'z-index':'99'}">
      <div class="sider">
        <div class="logo"></div>
        <Menu :active-name="currentPath" theme="dark" width="auto" accordion :class="menuitemClasses" ref="menu" @on-select="select">
          <Submenu name="1">
            <template slot="title">
              <Icon type="md-aperture" /><span>EDM</span>
            </template>
            <div class="sub-menu">
              <MenuItem name="1-1" :to="{name: 'Template', query: {type: 'edm'}}">模版管理</MenuItem>
              <MenuItem name="edm" to="/edmPage/edm">EDM管理</MenuItem>
            </div>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-apps"></Icon><span>H5页面</span>
            </template>
            <div class="sub-menu">
              <MenuItem name="h5Template">模版管理</MenuItem>
              <MenuItem name="h5" to="/h5page/h5">H5页面管理</MenuItem>
            </div>
          </Submenu>
        </Menu>
      </div>
    </Sider>
    <Layout :style="{'margin-left': siderWidth, 'height': '100vh'}">
      <Header class="header">
        <div class="header-content" :style="{width: headWidth}">
          <div>
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 0 0 20px'}" type="ios-arrow-dropleft" size="24"/>
            <Breadcrumb>
              <BreadcrumbItem>招赢营销活动管理平台</BreadcrumbItem>
              <BreadcrumbItem v-for=" (item ,i) in breadCrumbList" :key="i">{{item.meta.title}}</BreadcrumbItem>
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
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isCollapsed: false,
      breadCrumbList: null
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
    },
    siderWidth () {
      return this.isCollapsed ? '78px' : '256px'
    },
    currentPath () {
      return this.$route.name
    }
  },
  mounted () {
    this.breadCrumbList = this.$route.matched
  },
  watch: {
    $route () {
      this.breadCrumbList = []
      this.breadCrumbList = this.$route.matched
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
      this.closeSubmenu()
    },
    select (name) {
      if (this.isCollapsed) {
        this.closeSubmenu()
      }
    },
    closeSubmenu () {
      this.$nextTick(() => {
        var submenu = this.$refs.menu.$children
        submenu.forEach(item => {
          item.opened = false
        })
      })
    }
  }
}
</script>

<style scoped>
/deep/ ul,li,em{
  list-style: none;
  margin: 0;
  padding: 0;
  font-style: normal;
}
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  height: 100%;
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
  z-index: 99;
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

.menu-icon{
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-180deg);
}

</style>
