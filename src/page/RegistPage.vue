<script setup>
import { reactive } from "vue";
import { registProcess } from "../utils/process.js";

import InputArea from "../components/InputArea.vue";
import SakuraButton from "../components/SakuraButton.vue";
import ReturnPrev from "../components/ReturnPrev.vue";

import lock from "../assets/lock.png";
import mail from "../assets/email.png";
import loginlogo from "../assets/loginlogo.png";

const regist = reactive({
  email: "",
  password: "",
  checkPassword: "",
  username: "",
});
</script>

<template>
  <div class="overflow-hidden p-5 pt-8">
    <form
      @submit.prevent="registActive"
      class="flex flex-col items-center justify-center gap-8"
    >
      <div class="flex flex-col items-center justify-end">
        <img :src="loginlogo" alt="登入的 logo" class="w-64" />
        <InputArea
          type="email"
          :img="mail"
          v-model="regist.email"
          placeholder="請輸入您的 E-mail"
        />
      </div>
      <InputArea
        type="password"
        :img="lock"
        v-model="regist.password"
        placeholder="請輸入 4-12 位英數字密碼"
      />
      <InputArea
        type="password"
        :img="lock"
        v-model="regist.checkPassword"
        placeholder="請確認您的密碼"
      />
      <InputArea
        type="text"
        :img="lock"
        v-model="regist.username"
        placeholder="請輸入遊戲暱稱"
      />
      <div class="flex flex-col items-center justify-center gap-6">
        <SakuraButton
          @click="registProcess(regist.email, regist.username, regist.password)"
        >
          建立帳號
        </SakuraButton>
        <router-link to="/login" replace>
          <p class="text-center text-sm text-sky-600 underline">
            已經有帳號嗎？點這登入！
          </p>
        </router-link>
      </div>
    </form>
  </div>
  <ReturnPrev to="/login" />
</template>
