<!-- @format -->
<template>
  <section>Template</section>
</template>
<script lang="jsx" name="LayoutDemo" setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
import { ENV } from '@src/configs';
// components
const { replace } = useRouter();

onBeforeMount(() => {
  checkToken();
});
</script>
<style lang="less" scoped></style>
