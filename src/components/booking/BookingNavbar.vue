<script setup>
defineProps({
  slug: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nav class="booking-nav" aria-label="Accommodation sections">
    <RouterLink :to="`/boenden/${slug}#overview`">Overview</RouterLink>
    <RouterLink :to="`/boenden/${slug}#amenities`">Amenities</RouterLink>
    <RouterLink :to="`/boenden/${slug}#nearby`">Nearby</RouterLink>
    <RouterLink :to="`/boenden/${slug}#booking`">Booking</RouterLink>
  </nav>
</template>

<style scoped>
.booking-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.booking-nav a {
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #f8f0e5;
}

.booking-nav a:hover {
  background: rgba(255, 255, 255, 0.11);
}
</style>
