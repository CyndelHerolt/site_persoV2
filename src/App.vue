<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">CV</RouterLink>
        <RouterLink to="/about">Projets</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer>
    <p>Copyright © 2024 Cyndel Herolt • All right reserved</p>
  </footer>
</template>

<style scoped>

</style>
