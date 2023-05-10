<template>
  <form
    @submit.prevent=""
    class="flex w-full flex-col items-center justify-center gap-6 p-4"
  >
    <label for="answer" class="w-full">
      <input
        type="text"
        v-model="answer"
        name=""
        id="answer"
        class="w-full border-2 border-black py-3 text-center placeholder:text-center"
        placeholder="請輸入答案"
      />
    </label>
    <input
      type="submit"
      value="送出答案"
      class="w-full bg-sky-400 py-3 text-gray-100"
    />
  </form>
</template>
<script setup>
const answer = "";
</script>
