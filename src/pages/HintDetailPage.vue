<script setup>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import Botton from "../components/botton.vue";
import { returnProcess } from "../utils/utils";
import { getHint } from "../utils/api";
import { hintStatus } from "../utils/status";

const route = useRoute();
const router = useRouter();
const hintId = route.query.hintId;

onBeforeMount(async () => {
  await getHint(hintId);
});
</script>

<template>
  <div
    class="bg-FuxingBuilding flex h-screen w-screen items-center justify-center bg-cover bg-center"
  >
    <div
      class="flex h-80 w-[230px] flex-col items-center justify-between bg-black/60 py-6 px-2"
    >
      <p class="text-center text-2xl font-bold text-white">提示</p>
      <p class="text-center indent-2 text-lg font-extralight text-white">
        {{ hintStatus.data.hintContent }}
      </p>
      <Botton
        text="確認"
        class=""
        BackgroundColor="#D9D9D9"
        @click="returnProcess('/hints')"
      />
    </div>
  </div>
</template>

<style scoped>
.bg-FuxingBuilding {
  background-image: url("../assets/HealthRoom.png");
}
</style>
