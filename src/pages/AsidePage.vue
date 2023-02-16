<script setup>
import Dialog from "../components/Dialog.vue";
</script>

<template>
  <div class="bg-HealthRoom h-screen w-screen bg-cover bg-center bg-no-repeat">
    <div class="flex h-full w-full flex-row justify-center bg-black/40">
      <div class="flex flex-col justify-center">
        <p class="flex justify-center text-[5vw] text-[#F9F6F1]">
          幹幹幹這裡總共只能放十五個字啦
          <br />
          幹幹幹幹幹
        </p>
        <div class="h-[30px]"></div>
        <span class="flex justify-center text-[50px]">
          <font-awesome-icon
            icon="fa-solid fa-caret-down"
            class="flex justify-center text-[#F9F6F1]"
        /></span>
      </div>
    </div>
  </div>
  <Dialog
    speak-name="123"
    speak-content="56789"
    name-text-color="red"
    content-text-color="#584"
  />
</template>

<style scoped>
.bg-HealthRoom {
  background-image: url("../assets/HealthRoom.png");
}
</style>
