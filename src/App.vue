<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/cv">CV</RouterLink>
        <RouterLink to="/cv">Projets</RouterLink>
        <RouterLink to="/cv">Contact</RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer>
    <p>Copyright © 2024 Cyndel Herolt • All right reserved</p>
  </footer>
</template>

<style scoped>
</style>
