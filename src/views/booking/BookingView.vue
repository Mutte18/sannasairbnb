<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import BookingNavbar from '@/components/booking/BookingNavbar.vue'

const props = defineProps({
  accommodation: {
    type: Object,
    default: null,
  },
})

const hasAccommodation = computed(() => Boolean(props.accommodation))
</script>

<template>
  <main v-if="hasAccommodation" class="booking-view">
    <section class="booking-hero" :class="`booking-hero--${accommodation.accent}`">
      <div class="hero-copy">
        <p class="kicker">{{ accommodation.location }}</p>
        <h1>{{ accommodation.name }}</h1>
        <p class="intro">{{ accommodation.intro }}</p>
      </div>

      <div class="hero-panel">
        <p class="season-label">Best fit</p>
        <p class="season-copy">{{ accommodation.season }}</p>
        <BookingNavbar :slug="accommodation.slug" />
      </div>
    </section>

    <section id="overview" class="content-grid">
      <article class="content-card">
        <p class="section-label">Highlights</p>
        <h2>What makes {{ accommodation.name }} distinct</h2>
        <ul>
          <li v-for="highlight in accommodation.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </article>

      <article class="content-card stat-card">
        <p class="section-label">Quick facts</p>
        <div class="stats">
          <div v-for="stat in accommodation.stats" :key="stat.label">
            <span>{{ stat.label }}</span>
            <strong>{{ stat.value }}</strong>
          </div>
        </div>
      </article>
    </section>

    <section id="amenities" class="content-card">
      <p class="section-label">Amenities</p>
      <h2>Designed for a comfortable stay</h2>
      <div class="pill-grid">
        <span v-for="amenity in accommodation.amenities" :key="amenity" class="pill">
          {{ amenity }}
        </span>
      </div>
    </section>

    <section id="nearby" class="content-grid">
      <article class="content-card">
        <p class="section-label">Nearby</p>
        <h2>Places and experiences close to the stay</h2>
        <ul>
          <li v-for="place in accommodation.nearby" :key="place">{{ place }}</li>
        </ul>
      </article>

      <article id="booking" class="content-card booking-card">
        <p class="section-label">Booking</p>
        <h2>Ready for the listing details</h2>
        <p>{{ accommodation.bookingNote }}</p>
        <RouterLink to="/" class="back-link">Back to all stays</RouterLink>
      </article>
    </section>
  </main>

  <main v-else class="missing-view">
    <p class="section-label">Not found</p>
    <h1>This accommodation does not exist.</h1>
    <RouterLink to="/" class="back-link">Return home</RouterLink>
  </main>
</template>

<style scoped>
.booking-view {
  display: grid;
  gap: 1.5rem;
}

.booking-hero {
  display: grid;
  gap: 1.5rem;
  padding: clamp(1.5rem, 4vw, 3rem);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.booking-hero--coast {
  background:
    radial-gradient(circle at top right, rgba(239, 179, 102, 0.24), transparent 26%),
    linear-gradient(160deg, rgba(16, 42, 59, 0.98), rgba(24, 78, 103, 0.9));
}

.booking-hero--meadow {
  background:
    radial-gradient(circle at top right, rgba(224, 204, 115, 0.18), transparent 26%),
    linear-gradient(160deg, rgba(42, 52, 25, 0.98), rgba(87, 102, 61, 0.9));
}

.hero-copy,
.hero-panel,
.content-card,
.missing-view {
  display: grid;
  gap: 0.9rem;
}

.kicker,
.section-label,
.season-label,
.intro,
.season-copy,
.content-card p {
  margin: 0;
}

.kicker,
.section-label,
.season-label {
  color: #efb366;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
}

h1,
h2 {
  margin: 0;
  color: #f8f0e5;
  font-family: Georgia, 'Times New Roman', serif;
}

h1 {
  font-size: clamp(2.6rem, 7vw, 5rem);
  line-height: 0.95;
}

h2 {
  font-size: clamp(1.6rem, 4vw, 2.3rem);
}

.intro,
.season-copy,
.content-card p,
li {
  color: rgba(248, 240, 229, 0.82);
}

.hero-panel,
.content-card,
.missing-view {
  padding: 1.4rem;
  border-radius: 24px;
  background: rgba(8, 12, 18, 0.26);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.content-grid {
  display: grid;
  gap: 1.5rem;
}

ul {
  margin: 0;
  padding-left: 1.2rem;
}

li + li {
  margin-top: 0.6rem;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.stats div {
  min-width: 8rem;
  padding: 0.8rem 0.9rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
}

.stats span,
.stats strong {
  display: block;
}

.stats span {
  color: rgba(248, 240, 229, 0.6);
  font-size: 0.8rem;
}

.stats strong {
  color: #f8f0e5;
  font-size: 1.1rem;
}

.pill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.pill {
  padding: 0.75rem 0.95rem;
  border-radius: 999px;
  color: #f8f0e5;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.back-link {
  width: fit-content;
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  background: #f8f0e5;
  color: #101a23;
  font-weight: 600;
}

.missing-view {
  padding: 2rem;
}

@media (min-width: 900px) {
  .booking-hero,
  .content-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }
}
</style>
