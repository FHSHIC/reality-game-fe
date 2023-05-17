<script setup>
import { useRouter } from "vue-router";
import { clear, createStore } from "idb-keyval";

const custom = createStore("dramaDB", "levelStore");
clear(custom);

localStorage.clear();

useRouter().replace({
  path: "/",
});
</script>

<template>
  <div></div>
</template>
