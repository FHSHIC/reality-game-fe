<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getHintByIdFromStorage } from "../utils/status.js";

import Botton from "../components/Botton.vue";

const route = useRoute();

let intervalId;

const hint = reactive({
  text: "",
});

onMounted(() => {
  intervalId = setInterval(() => {
    const hintContent = getHintByIdFromStorage(route.params.hintId);
    hint.text = hintContent;
    if (hint.text) {
      clearInterval(intervalId);
    }
  }, 100);
});
</script>

<template>
  <div
    class="bg-monkey flex h-full w-full items-center justify-center bg-cover bg-center"
  >
    <div
      class="flex h-80 w-[230px] flex-col items-center justify-between bg-black/70 px-2 py-6"
    >
      <p class="text-center text-2xl font-bold text-white">提示</p>
      <p class="text-center indent-2 text-lg text-white">
        {{ hint.text }}
      </p>
      <router-link to="/hints">
        <Botton text="確認" BackgroundColor="#D9D9D9" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.bg-monkey {
  background-image: url("../assets/hint_background.png");
}
</style>
