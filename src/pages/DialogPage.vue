<template>
  <div
    class="puzzle-bg relative h-screen w-screen bg-cover bg-center"
    @click="speak"
  >
    <img :src="girl01" alt="" class="w-full pt-32" />
    <div class="absolute bottom-16">
      <Dialog :speak-content="speak_content" speak-name="曉夢" />
    </div>
  </div>
</template>
<script setup>
import girl01 from "../assets/girl01.png";
import Dialog from "../components/Dialog.vue";

const speak_content =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui velit, dolores architecto natus porro minus, iure quaerat tempora doloribus magnam, dignissimos ullam! Quibusdam aut laborum dolorem incidunt. Suscipit, quae voluptates.";

const speak = () => {
  console.log(speak_content);
};
</script>

<style>
.puzzle-bg {
  background-image: url("../assets/bg01.png");
}
</style>
