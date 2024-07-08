/** @format */
import dayjs from 'dayjs';
import { get, set } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
// apis
// hooks
// utils
// types
import type { IUserinfo, ILoginFormState } from '@src/types/index.d';
// stores
// mixins
// configs
// components
export const useUserinfo = defineStore(
  'userinfo',
  () => {
    const USERINFO = ref<IUserinfo>({});

    const userinfo = computed(() => {
      try {
        return get(USERINFO);
      } catch (error) {
        console.warn(error);
        return {};
      }
    });
    const token = computed(() => {
      try {
        return get(USERINFO, 'token');
      } catch (error) {
        console.warn(error);
        return '';
      }
    });
    const setUserinfo = (nextValues: IUserinfo) => {
      try {
        set(USERINFO, nextValues);
      } catch (error) {
        console.warn(error);
      }
    };

    return { userinfo, token, setUserinfo };
  },
  { persist: { storage: sessionStorage } },
);

export const useLoginFormState = defineStore(
  'loginForm',
  () => {
    const STORAGE_TIME = ref('');
    const LOGIN_FORM_STATE = ref<ILoginFormState>({ username: '', password: '', remember: false });

    const formState = computed(() => {
      try {
        return get(LOGIN_FORM_STATE);
      } catch (error) {
        console.warn(error);
        return {};
      }
    });

    const setLoginFormState = (nextValues: ILoginFormState) => {
      try {
        const time = dayjs().format('YYYY-MM-DD HH:mm:dd');

        set(LOGIN_FORM_STATE, nextValues);
        set(STORAGE_TIME, time);
      } catch (error) {
        console.warn(error);
      }
    };

    const checkLoginFormState = () => {
      try {
        const storageTime = get(STORAGE_TIME);
        const now = dayjs();

        if (storageTime) {
          if (now.subtract(1, 'week').isBefore(dayjs(storageTime))) {
            set(LOGIN_FORM_STATE, { username: '', password: '', remember: false });
            set(STORAGE_TIME, '');
            return;
          }
        } else {
          set(LOGIN_FORM_STATE, { username: '', password: '', remember: false });
          set(STORAGE_TIME, '');
        }
      } catch (error) {
        console.warn(error);
      }
    };
    return { formState, setLoginFormState, checkLoginFormState };
  },
  { persist: { storage: localStorage } },
);
