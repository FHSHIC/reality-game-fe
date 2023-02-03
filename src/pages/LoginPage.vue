<template>
  <div
    class="flex h-screen w-screen flex-col items-center justify-center py-4 px-2"
  >
    <div class="flex flex-col items-center justify-center gap-y-4">
      <h1 class="text-center text-4xl">登入</h1>
      <SignInForm />
    </div>
  </div>
</template>
<script setup>
import SignInForm from "../components/SignInForm.vue";
</script>
