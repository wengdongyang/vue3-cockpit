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
          <a-card class="card" title="弹窗 - 自定义">
            <a-button type="primary" @click="modalVisible = true">打开</a-button>

            <VueFinalModal v-if="modalVisible" v-model="modalVisible">
              <section class="modal">
                <header class="modal-header"></header>
                <section class="modal-content"></section>
                <footer class="modal-footer"></footer>
              </section>
            </VueFinalModal>
          </a-card>
        </a-col>
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
// components
const modalVisible = ref(false);
</script>
<style lang="less" scoped>
@import './Modal.less';
</style>
