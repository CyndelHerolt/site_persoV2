<script setup>
import { ref } from 'vue';

let clickedDivIndex = ref(-1);
let isMarioUp = ref(false);

const handleClick = (index) => {
  clickedDivIndex.value = index;
  isMarioUp.value = true;
  setTimeout(() => {
    isMarioUp.value = false;
  }, 500);
};
</script>

<template>
  <div class="projets">
    <span>
    <img src="/images/mario.png" alt="" width="25px">
    </span>
    <div v-for="(item, index) in Array(7)" :key="index" @click="handleClick(index)">
      <img v-if="clickedDivIndex !== index" src="/images/coin.png" alt="" width="20px">
      <img v-else-if="isMarioUp" src="/images/mario_up.png" alt="" width="32px">
      <img v-else src="/images/mario.png" alt="" width="22px">
      <img src="/images/pipe.png" alt="" width="40px">
    </div>
  </div>
</template>

<style scoped>

</style>