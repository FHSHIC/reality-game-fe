<script setup>
import { reactive } from "vue";

const props = defineProps(["type", "img", "modelValue", "placeholder"]);

const inputAttr = reactive({
  type: props.type,
});

const changeVisibleState = () => {
  if (inputAttr.type === "password") {
    inputAttr.type = "text";
    return;
  }
  if (inputAttr.type === "text") {
    inputAttr.type = "password";
    return;
  }
};
</script>

<template>
  <div
    class="relative flex items-center justify-start rounded-md bg-[#D9D9D9] px-3 py-1"
  >
    <img
      :src="props.img"
      alt="theImg"
      class="w-8"
      v-if="props.img !== undefined"
    />
    <input
      :type="inputAttr.type"
      class="w-full bg-inherit py-1 pl-2 pr-6 text-xl outline-none ring-0 placeholder:text-base placeholder:text-[#818181]"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete="off"
      :placeholder="props.placeholder"
    />
    <span
      class="absolute right-2 top-2 text-xl"
      v-if="props.type === 'password'"
      @click="changeVisibleState"
    >
      <font-awesome-icon
        icon="fa-solid fa-eye"
        v-if="inputAttr.type === 'password'"
      />
      <font-awesome-icon
        icon="fa-solid fa-eye-slash"
        v-if="inputAttr.type === 'text'"
      />
    </span>
  </div>
</template>
