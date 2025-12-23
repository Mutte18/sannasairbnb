<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="title-logo-wrapper">
      <div>Detta är en logga för hem</div>
      <div class="title">
        <RouterLink to="/"><h2>Sannas Airbnb</h2></RouterLink>
      </div>
      <div></div>
    </div>

    <nav>
      <RouterLink to="/">Boenden</RouterLink>
      <RouterLink to="/companies">Boka som Företag</RouterLink>
      <RouterLink to="/about">Om oss</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .title-logo-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .title-logo-wrapper .title {
    place-items: center;
  }
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    background-color: rgba(40, 52, 20, 0.76);
  }
}
</style>
