<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { getDrama } from "../utils/process.js";
import { getTeamStatusFromStorage } from "../utils/status";

const router = useRouter();

// getDrama();

onMounted(async () => {
  await getDrama();
  setTimeout(() => {
    router.replace({
      path: `/dialog/${getTeamStatusFromStorage().nowLevel}/0/0`,
    });
  }, 2000);

  // const levelKeys = [
  //   "level1",
  //   "level2",
  //   "level3",
  //   "level4",
  //   "level5",
  //   "level6",
  // ];
  // let allSet = true;
  // levelKeys.forEach(async (levelKey) => {
  //   const exist = await checkExist(levelKey);
  //   if (!exist) {
  //     allSet = false;
  //     return;
  //   }
  // });
  // if (!allSet) {
  //   getDrama().then(() => {
  //     router.replace("/login");
  //   });
  // } else {
  //   setTimeout(() => {
  //     router.replace({
  //       path: "/dialog",
  //       query: {
  //         level: 1,
  //         dramaSeq: 0,
  //         dialogSeq: 0,
  //       },
  //     });
  //   }, 500);
  // }
});
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
      <p class="text-xl text-white">正在檢查您的遊戲資料......</p>
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
