<script setup>
import { reactive } from "vue";
import CloseEyesSmile from "../assets/CloseEyesSmile.png";
import Botton from "../components/Botton.vue";
import InputArea from "../components/InputArea.vue";
import Gap from "../components/Gap.vue";
import ReturnPrev from "../components/ReturnPrev.vue";

const team = reactive({
  name: "",
});
</script>

<template>
  <div class="bg-Green h-screen w-screen bg-cover bg-center bg-no-repeat">
    <Gap />
    <div class="relative flex justify-center pt-[30px]">
      <img :src="CloseEyesSmile" alt="" class="h-[300px]" />
    </div>

    <div class="flex justify-center">
      <div class="absolute top-[360px]">
        <InputArea placeholder="隊伍名稱" type="text" v-model="team.name" />
      </div>
    </div>

    <p class="pb-10 pt-6 text-center text-lg font-black text-[#5E4C40]">
      恭喜你擔任隊長，幫大家取個名字吧！
    </p>
    <div class="flex justify-center">
      <Botton text="進入隊伍" BackgroundColor="#F6C4C7" @click="" />
    </div>
  </div>
</template>

<style scoped>
.bg-Green {
  background-image: url("../assets/GreenBackground.png");
}
</style>
