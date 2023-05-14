<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["to"]);
const router = useRouter();
const returnProcess = () => {
  if (props.to === "back") {
    router.back();
    return;
  }
  router.replace(props.to);
};
</script>

<template>
  <button class="fixed left-4 top-4" @click="returnProcess">
    <span class="text-3xl">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </span>
  </button>
</template>
