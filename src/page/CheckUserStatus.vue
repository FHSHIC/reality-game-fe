<script setup>
import { useRouter } from "vue-router";
import { getCurrentUserProcess } from "../utils/process.js";
import { getUserStatusFromStorage } from "../utils/status.js";

const router = useRouter();

setTimeout(async () => {
  if (!getUserStatusFromStorage) {
    router.replace("/login");
    return;
  }
  await getCurrentUserProcess();
}, 500);
</script>

<template>
  <div class="monkey_background h-full w-full bg-cover">
    <div
      class="flex h-full w-full flex-col items-center justify-center gap-4 bg-black/70"
    >
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p class="text-xl text-white">正在檢查您的使用者資料......</p>
      <p class="text-xl text-white">請保持您的網路通暢！</p>
    </div>
  </div>
</template>

<style scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

.monkey_background {
  background-image: url("../assets/hint_background.png");
}
</style>
