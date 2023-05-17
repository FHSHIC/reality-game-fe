<script setup>
import { reactive, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import {
  waitMember,
  gameStartProcess,
  gameEndProcess,
} from "../utils/process.js";
import {
  getUserStatusFromStorage,
  getTeamStatusFromStorage,
  waitStatus,
  delTeamStatusFromStorage,
} from "../utils/status.js";

import WaitingPlayer from "../components/WaitingPlayer.vue";
import Botton from "../components/Botton.vue";
import Gap from "../components/Gap.vue";

const route = useRoute();

const waitState = route.query.status;

waitMember(waitState);
const userStatus = getUserStatusFromStorage();
const teamStatus = getTeamStatusFromStorage();

onBeforeUnmount(() => {
  window.dispatchEvent(
    new CustomEvent("leave-waiting", {
      detail: {
        isStart: waitStatus.isStart,
      },
    })
  );
});
</script>

<template>
  <div class="h-screen w-full bg-[#F1E7FF]">
    <Gap />
    <p
      class="text-stroke pb-6 pt-4 text-center text-[55px] font-extrabold text-[#FFF4EA]"
    >
      {{
        waitStatus.team.teamName
          ? waitStatus.team.teamName
          : teamStatus.teamName
      }}
    </p>
    <div class="flex items-center justify-center">
      <div class="space-y-6">
        <WaitingPlayer
          v-for="player in waitStatus.onWaitMember"
          :key="player.userId"
          :name="player.username"
        />
      </div>
    </div>
    <div class="mt-[45px] flex flex-col items-center justify-center gap-5">
      <Botton
        :text="waitStatus.btnText"
        v-if="
          waitStatus.team.teamLeader === userStatus.account &&
          waitState === 'wait-start'
        "
        BackgroundColor="#AEBFF9"
        @click="gameStartProcess"
      />
      <Botton
        :text="waitStatus.btnText"
        v-if="
          waitStatus.team.teamLeader === userStatus.account &&
          waitState === 'wait-end'
        "
        BackgroundColor="#AEBFF9"
        @click="gameEndProcess"
      />
      <router-link to="/start" v-if="waitState === 'wait-start'">
        <Botton text="離開隊伍" BackgroundColor="#AEBFF9" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px black;
}
</style>
