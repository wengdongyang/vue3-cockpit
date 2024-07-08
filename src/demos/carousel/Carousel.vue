<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>普通轮播</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="轮播 - 水平(单个)">
            <Swiper
              v-if="dataSource.length > 0"
              class="swiper-horizontal-single"
              :loop="true"
              :slidesPerView="1"
              :spaceBetween="10"
              :navigation="{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
              }"
              :direction="'horizontal'"
              :autoplay="{ delay: 3000 }"
              :modules="[Navigation, Autoplay]"
            >
              <LeftCircleOutlined class="swiper-prev" />
              <RightCircleOutlined class="swiper-next" />
              <SwiperSlide
                class="swiper-slide-horizontal-single"
                v-for="(record, index) in dataSource"
                :key="index"
                @click="onClickSwiperItem(record, index)"
              >
                <section class="swiper-item swiper-item-horizontal-single">
                  <img
                    class="image"
                    :src="record.image"
                    :alt="record.name"
                    srcset=""
                  />
                  <p class="title bg-black">{{ record.name }}{{ index }}</p>
                </section>
              </SwiperSlide>
            </Swiper>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="轮播 - 水平(多个)">
            <Swiper
              v-if="dataSource.length > 0"
              class="swiper-horizontal-multiple"
              :loop="true"
              :slidesPerView="3"
              :spaceBetween="10"
              :navigation="{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
              }"
              :direction="'horizontal'"
              :autoplay="{ delay: 3000 }"
              :modules="[Navigation, Autoplay]"
            >
              <LeftCircleOutlined class="swiper-prev" />
              <RightCircleOutlined class="swiper-next" />
              <SwiperSlide
                class="swiper-slide-horizontal-multiple"
                v-for="(record, index) in dataSource"
                :key="index"
                @click="onClickSwiperItem(record, index)"
              >
                <section class="swiper-item swiper-item-horizontal-multiple">
                  <img
                    class="image"
                    :src="record.image"
                    :alt="record.name"
                    srcset=""
                  />
                  <p class="title bg-black">{{ record.name }}{{ index }}</p>
                </section>
              </SwiperSlide>
            </Swiper>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="轮播 - 垂直(单个)">
            <Swiper
              v-if="dataSource.length > 0"
              class="swiper-vertical-single"
              :loop="true"
              :slidesPerView="1"
              :spaceBetween="10"
              :navigation="true"
              :direction="'vertical'"
              :autoplay="{ delay: 3000 }"
              :modules="[Navigation, Autoplay]"
            >
              <UpCircleOutlined />
              <DownCircleOutlined />
              <SwiperSlide
                class="swiper-slide-vertical-single"
                v-for="(record, index) in dataSource"
                :key="index"
                @click="onClickSwiperItem(record, index)"
              >
                <section class="swiper-item swiper-item-vertical-single">
                  <img class="image" :src="record.image" alt="" srcset="" />
                  <p class="title bg-black">{{ record.name }}{{ index }}</p>
                </section>
              </SwiperSlide>
            </Swiper>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="轮播 - 垂直(多个)">
            <Swiper
              v-if="dataSource.length > 0"
              class="swiper-vertical-multiple"
              :loop="true"
              :slidesPerView="3"
              :spaceBetween="10"
              :navigation="true"
              :direction="'vertical'"
              :autoplay="{ delay: 3000 }"
              :modules="[Navigation, Autoplay]"
            >
              <SwiperSlide
                class="swiper-slide-vertical-multiple"
                v-for="(record, index) in dataSource"
                :key="index"
                @click="onClickSwiperItem(record, index)"
              >
                <section class="swiper-item swiper-item-vertical-multiple">
                  <img class="image" :src="record.image" alt="" srcset="" />
                  <p class="title">{{ record.name }}{{ index }}</p>
                </section>
              </SwiperSlide>
            </Swiper>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="轮播 - Grid">
            <Swiper
              v-if="dataSource.length > 0"
              class="swiper-grid"
              :grid="{ rows: 2 }"
              :slidesPerView="3"
              :spaceBetween="10"
              :navigation="true"
              :autoplay="{ delay: 3000 }"
              :modules="[Navigation, Grid, Autoplay]"
            >
              <SwiperSlide
                class="swiper-slide-grid"
                v-for="(record, index) in dataSource"
                :key="index"
                @click="onClickSwiperItem(record, index)"
              >
                <section class="swiper-item swiper-item-grid">
                  <img class="image" :src="record.image" alt="" srcset="" />
                  <p class="title">{{ record.name }}{{ index }}</p>
                </section>
              </SwiperSlide>
            </Swiper>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="轮播 - 卡片">
            <Swiper
              v-if="dataSource.length > 0"
              class="swiper-card"
              :grabCursor="true"
              :navigation="true"
              :effect="'coverflow'"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :pagination="true"
              :modules="[Navigation, EffectCoverflow, Autoplay]"
              :autoplay="{ delay: 3000 }"
            >
              <SwiperSlide
                class="swiper-slide-card"
                v-for="(record, index) in dataSource"
                :key="index"
                @click="onClickSwiperItem(record, index)"
              >
                <section class="swiper-item swiper-item-card">
                  <img class="image" :src="record.image" alt="" srcset="" />
                  <p class="title">{{ record.name }}{{ index }}</p>
                </section>
              </SwiperSlide>
            </Swiper>
          </a-card>
        </a-col>
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import {
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  UpCircleOutlined,
} from '@ant-design/icons-vue';
import { set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import { Autoplay, EffectCoverflow, Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
// apis
import { apiGetCarousel } from '@src/apis';
// hooks
// utils
// types
// stores
// mixins
// configs
// components
const dataSource = ref([]);

const { run } = useRequest(
  () => {
    return apiGetCarousel();
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

const onClickSwiperItem = (record, index) => {
  try {
    console.info(record, index);
  } catch (error) {
    console.warn(error);
  }
};

tryOnMounted(() => {
  run();
});
</script>
<style lang="less" scoped>
@import './Carousel.less';
</style>
