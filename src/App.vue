<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="brand-row">
        <RouterLink to="/" class="brand-mark">SA</RouterLink>
        <div class="brand-copy">
          <RouterLink to="/" class="brand-title">Sannas Airbnb</RouterLink>
          <p class="brand-subtitle">Two curated stays, one simple place to explore both.</p>
        </div>
      </div>

      <nav class="site-nav">
        <RouterLink to="/">Boenden</RouterLink>
        <RouterLink to="/companies">Foretag</RouterLink>
        <RouterLink to="/about">Om oss</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.app-shell {
  display: grid;
  gap: 2rem;
}

.site-header {
  display: grid;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(173, 94, 66, 0.24), rgba(19, 54, 78, 0.24)),
    rgba(9, 15, 23, 0.72);
  backdrop-filter: blur(16px);
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 18px;
  background: linear-gradient(135deg, #efb366, #d76b52);
  color: #0d1722;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
}

.brand-copy {
  display: grid;
  gap: 0.2rem;
}

.brand-title {
  color: #f8f0e5;
  text-decoration: none;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
}

.brand-subtitle {
  margin: 0;
  color: rgba(248, 240, 229, 0.72);
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.site-nav a {
  padding: 0.7rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8f0e5;
  background: rgba(255, 255, 255, 0.04);
}

.site-nav a.router-link-exact-active {
  background: rgba(239, 179, 102, 0.18);
  border-color: rgba(239, 179, 102, 0.34);
}

@media (min-width: 900px) {
  .site-header {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
}
</style>
