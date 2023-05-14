<script setup>
import { reactive } from "vue";
import WaitingPlayer from "../components/WaitingPlayer.vue";
import Botton from "../components/Botton.vue";
import Gap from "../components/Gap.vue";

const info = reactive({
  btntext: "開始遊戲",
  players: ["一號", "二號", "三號", "四號"],
  onlinePlayers: [],
});
</script>

<template>
  <div class="h-screen w-full bg-[#F1E7FF]">
    <Gap />
    <p
      class="text-stroke pb-6 pt-4 text-center text-[55px] font-extrabold text-[#FFF4EA]"
    >
      暫定隊伍
    </p>
    <div class="flex items-center justify-center">
      <div class="space-y-6">
        <WaitingPlayer
          v-for="(player, index) in info.players"
          :key="index"
          :name="player"
        />
      </div>
    </div>
    <div class="mt-[45px] flex justify-center">
      <Botton
        :text="info.btntext"
        BackgroundColor="#AEBFF9"
        @click="
          gamestartProcess(
            teamStatus.data.gamecode,
            userStatus.data.accessToken
          )
        "
      />
    </div>
  </div>
</template>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px black;
}
</style>
