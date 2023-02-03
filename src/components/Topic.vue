<template>
  <form
    class="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-6"
    @submit.prevent="topicMethod"
  >
    <label for="quesion" class="">
      <p class="border-10"></p>
    </label>
    <label for="ans" class="">
      <p class="">ans</p>
      <input
        v-model.trim="topic.ans"
        type="text"
        name=""
        id="ans"
        class="border-2"
      />
      <input
        type="submit"
        value="送出"
        class="w-full bg-green-600 py-2 text-lg text-gray-100"
      />
    </label>
  </form>
</template>
<script setup>
import { reactive } from "vue";

const topic = {
  ans: "",
};

function topicMethod() {
  console.log(topic);
}
</script>
<style></style>
