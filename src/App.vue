
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="4">
              <Icon type="ios-contact" />管理员
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>营销活动
              </template>
              <MenuItem name="1-1">EDM</MenuItem>
              <MenuItem name="1-2">营销页面</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav {
  margin: 0 auto;
  margin-right: 20px;
  float: right;
}
</style>
