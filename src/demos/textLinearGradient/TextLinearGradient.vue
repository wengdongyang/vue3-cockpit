<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>文字渐变</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="文字渐变 - 普通"> </a-card>
        </a-col>
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import { ref } from 'vue';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
// components
</script>
<style lang="less" scoped>
@import './TextLinearGradient.less';
</style>
