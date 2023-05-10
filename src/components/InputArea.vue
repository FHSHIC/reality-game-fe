<script setup>
const props = defineProps(["type", "img", "modelValue", "placeholder"]);
</script>

<template>
  <div
    class="flex items-center justify-start rounded-md bg-[#D9D9D9] py-1 px-3"
  >
    <img
      :src="props.img"
      alt="theImg"
      class="w-8"
      v-if="props.img !== undefined"
    />
    <input
      :type="props.type"
      class="w-full bg-inherit py-1 pl-2 pr-2 text-xl outline-none ring-0 placeholder:text-base placeholder:text-[#818181]"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete="off"
      :placeholder="props.placeholder"
    />
  </div>
</template>
