<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>弹窗</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="弹窗 - 普通"> </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="弹窗 - 背景图">
            <teleport to="body"></teleport>
          </a-card>
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
@import './Modal.less';
</style>
