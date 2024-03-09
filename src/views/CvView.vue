<template>
  <div class="cv">
    <nav class="onglets">
      <RouterLink to="/cv/formations" active-class="active-link">
        Formations
      </RouterLink>
      <RouterLink to="/cv/experiences" active-class="active-link">
        Expériences
      </RouterLink>
      <RouterLink to="/cv/competences" active-class="active-link">
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
<script setup>
</script>