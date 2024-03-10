<script setup>
import { ref } from 'vue';
import UniFolio from '../components/UniFolio.vue';
import Intranet from '../components/Intranet.vue';
import WWCV2 from '../components/WWCV2.vue';
import POC3D from '../components/POC3D.vue';
import EscapeGameVR from '../components/EscapeGameVR.vue';

let clickedDivIndex = ref(0);
let isMarioUp = ref(false);
let started = ref(false);
let showDetails = ref(false);
let projects = ref(['UniFolio', 'Intranet', 'WWCV2', 'POC3D', 'EscapeGameVR']);
let currentComponent = ref(null); // Nouvelle variable pour stocker le nom du composant

// Créer une correspondance entre les noms de projets et les noms de composants
let projectComponents = {
  'UniFolio': UniFolio,
  'Intranet': Intranet,
  'WWCV2': WWCV2,
  'POC3D': POC3D,
  'EscapeGameVR': EscapeGameVR
};

const handleClick = (index) => {
  if (started.value === false) {
    started.value = true;
  }
  clickedDivIndex.value = index;
  isMarioUp.value = true;
  setTimeout(() => {
    isMarioUp.value = false;
  }, 500);
};

const handleEnter = () => {
  showDetails.value = true;
  currentComponent.value = projectComponents[projects.value[clickedDivIndex.value]]; // Mettre à jour le nom du composant
};
</script>

<template>
  <div class="projets">
    <div v-if="!showDetails" v-for="(item, index) in Array(5)" :key="index" @click="handleClick(index)" style="width: 100px">
      <img class="coin" v-if="clickedDivIndex !== index" src="/images/coin.png" alt="" width="20px">
      <img class="mario" v-else-if="isMarioUp" src="/images/mario_up.png" alt="" width="32px">
      <img class="mario" v-else src="/images/mario.png" alt="" width="22px">
      <img class="pipe" src="/images/pipe.png" alt="" width="40px">
      <small style="font-size: .7rem">{{ projects[index] }}</small>
      <button class="project-btn" v-if="clickedDivIndex === index" @click="handleEnter">Entrer</button>
    </div>
    <component v-if="showDetails" :is="currentComponent" @return="showDetails = false"></component>
  </div>
</template>

<style scoped>

</style>