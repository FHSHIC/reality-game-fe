<template>
  <form
    class="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-2"
    @submit.prevent="signInMethod"
  >
    <label for="email" class="">
      <p class="">Email</p>
      <input
        v-model.trim="signInInfo.email"
        type="email"
        name=""
        id="email"
        class="border-2"
      />
    </label>

    <label for="password" class="">
      <p class="">密碼</p>
      <input
        v-model="signInInfo.password"
        type="password"
        name=""
        id="password"
        class="border-2"
      />
    </label>
    <input
      type="submit"
      value="登入"
      class="w-full bg-green-600 py-2 text-lg text-gray-100"
    />
  </form>
</template>
<script setup>
import { reactive } from "vue";

const signInInfo = {
  email: "",
  password: "",
};

function signInMethod() {
  console.log(signInInfo);
}
</script>
<style></style>
