<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>轮播表格</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="12">
          <a-card class="card" title="轮播表格">
            <CoCarouselTable
              v-if="dataSource.length > 0"
              class="table"
              :columns="[
                { type: 'custom', title: '姓名', dataIndex: 'name', key: 'name', width: 100 },
                { type: 'custom', title: '年龄', dataIndex: 'age', key: 'age' },
                { type: 'input', title: '住址', dataIndex: 'address', key: 'address', ellipsis: true },
              ]"
              :dataSource="dataSource"
              :slidesToShow="10"
              :tableTheadThHeight="24"
              :tableTbodyTdHeight="34"
              :rowClassName="rowClassName"
              :tdClassName="tdClassName"
            >
              <template #bodyCell="{ column, text, record }">
                <template v-if="column.dataIndex === 'name'">
                  <template v-if="text === '胡彦斌2'"> 888 </template>
                  <template v-else> name{{ text }} </template>
                </template>
                <template v-if="column.dataIndex === 'age'">
                  {{ record.age }}
                </template>
              </template>
            </CoCarouselTable>
          </a-card>
        </a-col>
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import { set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
// apis
import { apiGetCarouselTable } from '@src/apis';
// hooks
// utils
// types
// stores
// mixins
// configs
// components
import { CoCarouselTable } from '@src/components';

const dataSource = ref([]);

const { run } = useRequest(
  () => {
    return apiGetCarouselTable();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200 && data?.list?.length) {
        set(dataSource, data.list);
      } else {
        message.error(msg);
      }
    },
  },
);

const rowClassName = (record, index) => {
  return index % 2 === 0 ? 'index' : '';
};
const tdClassName = (column, record, index) => {
  return column.dataIndex === 'age' ? 'age' : '';
};

tryOnMounted(async () => {
  await run();
});
</script>
<style lang="less" scoped>
@import './CarouselTable.less';
</style>
