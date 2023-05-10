<script setup>
import { reactive } from "vue";
import Back from "../assets/back.png";
import CloseEyesSmile from "../assets/CloseEyesSmile.png";
import Botton from "../components/Botton.vue";
import InputArea from "../components/InputArea.vue";
import Gap from "../components/Gap.vue";
import ReturnPrev from "../components/ReturnPrev.vue";
import { gamecodeCheckProcess } from "../utils/api";

const game = reactive({
  code: "",
});
</script>

<template>
  <div class="bg-Orange h-screen w-screen bg-cover bg-center bg-no-repeat">
    <Gap />
    <div class="relative flex justify-center pt-[30px]">
      <img :src="CloseEyesSmile" alt="" class="h-[300px]" />
    </div>

    <div class="flex justify-center">
      <div class="absolute top-[360px]">
        <InputArea
          type="text"
          placeholder="請輸入您的遊戲序號"
          v-model="game.code"
        />
      </div>
    </div>

    <p class="pt-7 pb-10 text-center text-xl font-black text-[#5E4C40]">
      請從袋中拿出卡片輸入遊戲序號
    </p>
    <div class="flex justify-center">
      <Botton
        text="進入隊伍"
        BackgroundColor="#F6C4C7"
        @click="gamecodeCheckProcess(game.code)"
      />
    </div>
  </div>
  <ReturnPrev />
</template>

<style scoped>
.bg-Orange {
  background-image: url("../assets/OrangeBackground.png");
}
</style>
