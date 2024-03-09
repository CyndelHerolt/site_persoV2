<script setup>
import {onMounted, ref} from "vue";

let intervalId = null; // New variable

onMounted(() => {
  // Start the image rotation
  startImageRotation();
});

// Image rotation
const images = ['link1.png', 'link2.png'];
const currentImage = ref(images[0]);
let imageIndex = 0;

const startImageRotation = () => {
  intervalId = setInterval(() => { // Assign intervalId
    imageIndex = (imageIndex + 1) % images.length;
    currentImage.value = images[imageIndex];
  }, 300);
};
</script>

<template>
  <div class="cv">
    <nav class="onglets">
      <RouterLink to="/cv/formations" active-class="active-link">
        <img v-if="$route.path === '/cv/formations'" class="spriteLink" :src="'/images/' + currentImage" alt="sprite personnage" height="25px">
        Formations
      </RouterLink>
      <RouterLink to="/cv/experiences" active-class="active-link">
        <img v-if="$route.path === '/cv/experiences'" class="spriteLink" :src="'/images/' + currentImage" alt="sprite personnage" height="25px">
        Expériences
      </RouterLink>
      <RouterLink to="/cv/competences" active-class="active-link">
        <img v-if="$route.path === '/cv/competences'" class="spriteLink" :src="'/images/' + currentImage" alt="sprite personnage" height="25px">
        Compétences
      </RouterLink>
    </nav>

    <div class="cv-content">
      <router-view/>
    </div>

  </div>
</template>

<style>
</style>