<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>数字 Countup</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="数字 Countup - 普通">
            <CountUp
              :delay="1000"
              :endVal="100"
              :options="{ useEasing: true, useGrouping: true, separator: ',', decimal: '.', prefix: '', suffix: '' }"
            />
          </a-card>
        </a-col>
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import CountUp from 'vue-countup-v3';
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
@import './TextNumberCountup.less';
</style>
