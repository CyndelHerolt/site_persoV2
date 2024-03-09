<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/" active-class="active-link">Accueil</RouterLink>
        <RouterLink to="/cv" active-class="active-link">CV</RouterLink>
        <RouterLink to="/projets" active-class="active-link">Projets</RouterLink>
        <RouterLink to="/contact" active-class="active-link">Contact</RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer>
    <p>Copyright © 2024 Cyndel Herolt • All right reserved</p>
  </footer>
</template>

<style scoped>
</style>
