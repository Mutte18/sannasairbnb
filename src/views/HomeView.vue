<script setup>
import { RouterLink } from 'vue-router'
import { accommodations } from '../data/accommodations'
</script>

<template>
  <main class="home-view">
    <section class="hero">
      <p class="eyebrow">Stay Collection</p>
      <h1>Choose between a west coast escape and a calmer countryside stay.</h1>
      <p class="hero-copy">
        The site now centers around two main accommodation pages. Each card leads to a
        dedicated Vue Router page with more detail about the stay, nearby activities, and
        practical information.
      </p>
    </section>

    <section class="card-grid" aria-label="Accommodation options">
      <article
        v-for="accommodation in accommodations"
        :key="accommodation.slug"
        class="stay-card"
        :class="`stay-card--${accommodation.accent}`"
      >
        <div class="card-top">
          <p class="card-kicker">{{ accommodation.location }}</p>
          <h2>{{ accommodation.name }}</h2>
          <p class="card-tagline">{{ accommodation.tagline }}</p>
        </div>

        <ul class="stat-list">
          <li v-for="stat in accommodation.stats" :key="stat.label">
            <span>{{ stat.label }}</span>
            <strong>{{ stat.value }}</strong>
          </li>
        </ul>

        <p class="card-intro">{{ accommodation.intro }}</p>

        <RouterLink :to="`/boenden/${accommodation.slug}`" class="card-cta">
          Explore {{ accommodation.name }}
        </RouterLink>
      </article>
    </section>
  </main>
</template>

<style scoped>
.home-view {
  display: grid;
  gap: 2rem;
}

.hero {
  display: grid;
  gap: 1rem;
  padding: clamp(1.5rem, 3vw, 3rem);
  min-height: 20rem;
  border-radius: 32px;
  background:
    radial-gradient(circle at top left, rgba(239, 179, 102, 0.28), transparent 35%),
    linear-gradient(145deg, rgba(13, 28, 43, 0.96), rgba(29, 53, 68, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.eyebrow {
  margin: 0;
  color: #efb366;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.8rem;
}

h1 {
  margin: 0;
  max-width: 12ch;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.8rem, 8vw, 5.8rem);
  line-height: 0.95;
  color: #f8f0e5;
}

.hero-copy {
  margin: 0;
  max-width: 44rem;
  color: rgba(248, 240, 229, 0.8);
  font-size: 1.05rem;
}

.card-grid {
  display: grid;
  gap: 1.5rem;
}

.stay-card {
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 28px;
  min-height: 24rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
}

.stay-card--coast {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    linear-gradient(150deg, rgba(27, 78, 109, 0.95), rgba(14, 33, 47, 0.98));
}

.stay-card--meadow {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
    linear-gradient(150deg, rgba(79, 96, 57, 0.92), rgba(32, 40, 25, 0.98));
}

.card-top {
  display: grid;
  gap: 0.6rem;
}

.card-kicker,
.card-tagline,
.card-intro {
  margin: 0;
}

.card-kicker {
  color: rgba(248, 240, 229, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
}

.stay-card h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: #f8f0e5;
}

.card-tagline,
.card-intro {
  color: rgba(248, 240, 229, 0.84);
}

.stat-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.stat-list li {
  min-width: 7.5rem;
  padding: 0.8rem 0.9rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-list span,
.stat-list strong {
  display: block;
}

.stat-list span {
  font-size: 0.8rem;
  color: rgba(248, 240, 229, 0.65);
}

.stat-list strong {
  color: #f8f0e5;
  font-size: 1rem;
}

.card-cta {
  width: fit-content;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  background: #f8f0e5;
  color: #14202b;
  font-weight: 600;
}

@media (min-width: 900px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
