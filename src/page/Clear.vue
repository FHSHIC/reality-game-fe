<script setup>
import { clear, createStore } from "idb-keyval";

const custom = createStore("dramaDB", "levelStore");
clear(custom);
</script>

<template>
  <div></div>
</template>
