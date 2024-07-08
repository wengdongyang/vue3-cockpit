<!-- @format -->
<template>
  <ConfigProvider
    :locale="zhCN"
    :input="{ autocomplete: 'off' }"
  >
    <RouterView />
  </ConfigProvider>
</template>
<script setup lang="tsx">
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { RouterView } from 'vue-router';
</script>
<style lang="less" scoped></style>
