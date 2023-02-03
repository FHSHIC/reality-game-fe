<template>
  <form
    class="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-6"
    @submit.prevent="registerMethod"
  >
    <label for="account-number" class="">
      <p class="">帳號</p>
      <input
        v-model.trim="register.accountNumber"
        type="text"
        name=""
        id="account-number"
        class="border-2"
      />
    </label>

    <label for="email" class="">
      <p class="">Email</p>
      <input
        v-model.trim="register.email"
        type="email"
        name=""
        id="email"
        class="border-2"
      />
    </label>
    <label for="password" class="">
      <p class="">密碼</p>
      <input
        v-model="register.password"
        type="password"
        name=""
        id="password"
        class="border-2"
      />
    </label>
    <label for="check-password" class="">
      <p class="">確認密碼</p>
      <input
        v-model="register.checkPassword"
        type="password"
        name=""
        id="check-password"
        class="border-2"
      />
    </label>
    <input
      type="submit"
      value="註冊"
      class="w-full bg-green-600 py-2 text-lg text-gray-100"
    />
  </form>
</template>
<script setup>
import { reactive } from "vue";

const register = {
  accountNumber: "",
  email: "",
  password: "",
  checkPassword: "",
};

function registerMethod() {
  console.log(register);
}
</script>
<style></style>
