<template>
  <a-layout style="min-height: 100vh" class="main">
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="menu">
      <!-- left-logo -->
      <div class="logo" />
      <!-- left-menu -->
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>用戶中心</span>
            </span>
          </template>
          <a-menu-item key="3">用戶列表</a-menu-item>
          <a-menu-item key="4">個人中心</a-menu-item>
          <a-menu-item key="5">用戶詳情</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>調度中心</span>
            </span>
          </template>
          <a-menu-item key="6">定時任務</a-menu-item>
          <a-menu-item key="8">延時任務</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <!-- right-header -->
      <a-layout-header style="background: #fff; padding: 0">
        <BasicLayoutHeaderVue :toggleCollapsed="toggleCollapsed"/>
      </a-layout-header>
      <!-- right-content -->
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0"></a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <!-- right-footer -->
      <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import BasicLayoutHeaderVue from './BasicLayoutHeader.vue';

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

const toggleCollapsed = ()=>{
  collapsed.value = !collapsed.value;
}

</script>
<style lang="scss" scoped>
.main {
  .menu {
    .logo {
      height: 32px;
      margin: 16px;
      background: rgba(255, 255, 255, 0.3);
    }
  }
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
