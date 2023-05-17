<script setup></script>

<template>
  <div class="h-mobile-screen fixed w-screen bg-[#FFF3A8]">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style></style>
