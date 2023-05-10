<script setup>
import { reactive } from "vue";
import WaitingPlayer from "../components/WaitingPlayer.vue";
import Botton from "../components/Botton.vue";
import ReturnPrev from "../components/ReturnPrev.vue";
import Gap from "../components/Gap.vue";

import {
  gamestartProcess,
  waitingProcess,
  gameContinuedProcess,
  getDrama,
} from "../utils/api";
import { userStatus, teamStatus, getSessionStorage } from "../utils/status";

const info = reactive({
  btntext: "開始遊戲",
  players: [...teamStatus.data.members],
  onlinePlayers: [],
});

waitingProcess(info);

if (!teamStatus.data.isStart) {
  getDrama(teamStatus.data.nowDramaId);
}
</script>

<template>
  <div class="h-screen w-full bg-[#F1E7FF]">
    <Gap />
    <p
      class="text-stroke pt-4 pb-6 text-center text-[55px] font-extrabold text-[#FFF4EA]"
    >
      {{ teamStatus.data.teamName }}
    </p>
    <div class="flex items-center justify-center">
      <div class="space-y-6" v-if="!teamStatus.data.isStart">
        <WaitingPlayer
          v-for="(player, index) in info.players"
          :key="index"
          :name="player"
        />
      </div>
      <div class="space-y-6" v-if="teamStatus.data.isStart">
        <WaitingPlayer
          v-for="(player, index) in info.onlinePlayers"
          :key="index"
          :name="player"
        />
      </div>
    </div>
    <div
      class="mt-[45px] flex justify-center"
      v-if="teamStatus.data.isTeamLeader"
    >
      <Botton
        :text="info.btntext"
        v-if="!teamStatus.data.isStart"
        BackgroundColor="#AEBFF9"
        @click="
          gamestartProcess(
            teamStatus.data.gamecode,
            userStatus.data.accessToken
          )
        "
      />
      <Botton
        text="繼續遊戲"
        v-if="teamStatus.data.isStart"
        BackgroundColor="#AEBFF9"
        @click="
          () => {
            if (info.onlinePlayers.length !== info.players.length) {
              alert('人來沒到齊喔！');
              return;
            }
            return gameContinuedProcess(
              teamStatus.data.gamecode,
              userStatus.data.accessToken
            );
          }
        "
      />
    </div>
  </div>
  <ReturnPrev />
</template>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px black;
}
</style>
