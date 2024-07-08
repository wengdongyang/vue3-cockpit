<!-- @format -->
<template>
  <ConfigProvider :theme="{ algorithm: theme.darkAlgorithm }">
    <a-layout :class="$style['layout']">
      <a-layout-header :class="$style['header']"> 驾驶舱DEMO </a-layout-header>
      <a-layout :class="$style['content-layout']">
        <a-layout-sider :class="$style['content-layout-sider']">
          <a-menu :selectedKeys="selectedKeys" :items="menuItems" theme="dark" mode="inline" @click="onClickMenuItem" />
        </a-layout-sider>
        <a-layout-content :class="$style['content-layout-content']">
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </ConfigProvider>
</template>
<script lang="jsx" name="LayoutDemo" setup>
import { RouterView } from 'vue-router';
import { ConfigProvider, theme } from 'ant-design-vue';
import { computed, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
import { ENV } from '@src/configs';
import { demoRoutes } from '@src/router';
// components
const { push, replace } = useRouter();
const route = useRoute();

const menuItems = computed(() => {
  try {
    return demoRoutes.filter((el) => el.path).map((el) => ({ key: el.path, label: el.meta.name, title: el.meta.name }));
  } catch (error) {
    console.warn(error);
    return [];
  }
});

const selectedKeys = computed(() => {
  try {
    const paths = route.path.split('/');
    return [paths[paths.length - 1]];
  } catch (error) {
    console.warn(error);
    return [];
  }
});

const onClickMenuItem = ({ key }) => {
  try {
    push({ path: `/demo/${key}` });
  } catch (error) {
    console.warn(error);
  }
};

const checkToken = () => {
  try {
    const token = sessionStorage.getItem(ENV.TOKEN);
    if (!token) {
      replace({ path: '/login' });
    }
  } catch (error) {
    console.warn(error);
  }
};
onBeforeMount(() => {
  checkToken();
});
</script>
<style lang="less" module>
@import './Demo.less';
</style>
