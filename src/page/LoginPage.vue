<script setup>
import { reactive } from "vue";
import { loginProcess } from "../utils/process.js";

import InputArea from "../components/InputArea.vue";
import SakuraButton from "../components/SakuraButton.vue";
import ReturnPrev from "../components/ReturnPrev.vue";

import lock from "../assets/lock.png";
import mail from "../assets/email.png";
import loginlogo from "../assets/loginlogo.png";

const login = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div class="p-5 pt-20">
    <form
      @submit.prevent="loginActive"
      class="flex flex-col items-center justify-center gap-8"
    >
      <div class="flex flex-col items-center justify-end">
        <img :src="loginlogo" alt="登入的 logo" class="w-64" />
        <InputArea
          type="email"
          :img="mail"
          v-model="login.email"
          placeholder="請輸入您的 E-mail"
        />
      </div>
      <InputArea
        type="password"
        :img="lock"
        v-model="login.password"
        placeholder="請輸入您的密碼"
      />
      <div class="flex flex-col items-center justify-center gap-6">
        <SakuraButton @click="loginProcess(login.email, login.password)">
          登入帳號
        </SakuraButton>
        <router-link to="/regist" replace>
          <p class="text-center text-sm text-sky-600 underline">
            還沒有帳號嗎？點這註冊！
          </p>
        </router-link>
      </div>
    </form>
  </div>
  <!-- <ReturnPrev to="/" /> -->
</template>
