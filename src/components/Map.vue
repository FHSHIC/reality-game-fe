<template>
  <form
    class="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-6"
    @submit.prevent="mapMethod"
  >
    <label for="where" class="">
      <p class="border-10"></p>
    </label>
    <label for="" class="">
      <p class="border-10"></p>
    </label>
    <input
      type="submit"
      value="開始"
      class="w-full bg-green-600 py-2 text-lg text-gray-100"
    />
  </form>
</template>
<script setup>
import { reactive } from "vue";

const map = {};

function mapMethod() {
  console.log(map);
}
</script>
<style></style>
