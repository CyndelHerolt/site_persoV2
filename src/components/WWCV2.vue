<script>
import { defineProps } from 'vue';

export default {
  setup(props, { emit }) {
    // Définir une fonction pour émettre l'événement
    const returnToProjects = () => {
      emit('return');
    };

    return {
      returnToProjects
    };
  }
};
</script>

<template>
  <!-- Votre contenu existant -->
  <button @click="returnToProjects">Retour</button>
</template>