<!-- @format -->
<template>
  <ConfigProvider :theme="{ algorithm: theme.defaultAlgorithm }">
    <section :class="$style['root']">
      <section :class="$style['login-layout']">
        <header :class="$style['login-header']">登陆</header>
        <section :class="$style['login-content']">
          <a-form
            :class="$style['form']"
            :model="loginFormState"
            :labelCol="{ span: 4 }"
            :wrapperCol="{ span: 18 }"
            @finish="onFinish">
            <a-form-item :class="$style['form-item']" label="用户名" name="username" :rules="[{ required: true }]">
              <a-input :class="$style['input']" v-model:value="loginFormState.username" allowClear />
            </a-form-item>
            <a-form-item :class="$style['form-item']" label="密码" name="password" :rules="[{ required: true }]">
              <a-input-password :class="$style['input']" v-model:value="loginFormState.password" allowClear />
            </a-form-item>
            <a-form-item :class="$style['form-item']" name="remember" :wrapper-col="{ offset: 2, span: 16 }">
              <a-checkbox :class="$style['checkbox']" v-model:checked="loginFormState.remember">记住密码</a-checkbox>
            </a-form-item>
            <a-form-item :class="$style['form-item']" :wrapper-col="{ offset: 2, span: 20 }">
              <a-button :class="$style['submit']" type="primary" block html-type="submit">提交</a-button>
            </a-form-item>
          </a-form>
        </section>
      </section>
    </section>
  </ConfigProvider>
</template>
<script lang="jsx" name="LayoutLogin" setup>
import { get, set } from '@vueuse/core';
import { ConfigProvider, message, theme } from 'ant-design-vue';
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
// apis
import { apiPostLogin } from '@src/apis';
// hooks
// utils
// types
// stores
import { useLoginFormState, useUserinfo } from '@src/stores/index';
// mixins
// configs
import { ENV } from '@src/configs';
// components
const { push } = useRouter();
const storeUserinfo = useUserinfo();
const storeLoginFormState = useLoginFormState();
const { setUserinfo } = storeUserinfo;
const { setLoginFormState, checkLoginFormState } = storeLoginFormState;
const { formState } = storeToRefs(storeLoginFormState);

const defaultLoginFormState =
  ENV.MODE === 'production'
    ? { username: null, password: null, remember: true }
    : { username: import.meta.env.VITE_USERNAME, password: import.meta.env.VITE_PASSWORD, remember: true };

const loginFormState = ref(defaultLoginFormState);

const initLoginFormState = () => {
  try {
    const nextFormState = get(formState);
    set(loginFormState, nextFormState);
  } catch (error) {
    console.warn(error);
  }
};

const onFinish = async (values) => {
  try {
    const { username, password, remember } = values;
    const { code, data, msg } = await apiPostLogin({ username, password });
    if (code === 200) {
      if (data.token) {
        sessionStorage.setItem(ENV.TOKEN, data.token);
      }
      // 记住密码
      if (remember) {
        setLoginFormState({ username, password, remember });
      } else {
        setLoginFormState({ username: '', password: '', remember: false });
      }

      setUserinfo(data);

      push({ path: '/demo' });
    } else {
      message.error(msg);
    }
  } catch (error) {
    console.warn(error);
  }
};

onBeforeMount(() => {
  checkLoginFormState();
});

onMounted(() => {
  initLoginFormState();
});
</script>
<style lang="less" module>
@import './Login.less';
</style>
