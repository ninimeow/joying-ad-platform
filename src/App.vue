
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="logo"></div>
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>营销活动管理
          </template>
          <MenuItem name="1-1">EDM</MenuItem>
          <MenuItem name="1-2">营销活动</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header class="header">
        <div>
          <Icon type="ios-contact" />管理员
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
  name: 'App'
}
</script>

<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.header {
  background: #fff;
}

.logo {
  height: 63px;
  line-height: 63px;
  text-align: center;
  overflow: hidden;
}
</style>
