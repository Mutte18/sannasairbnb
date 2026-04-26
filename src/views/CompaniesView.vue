<template>
  <section class="info-page">
    <p class="eyebrow">Foretag</p>
    <h1>For company bookings, present the accommodation in a more direct format.</h1>
    <p>
      This page can later be expanded with invoice details, long-stay terms, or direct contact
      information for business guests.
    </p>
  </section>
</template>

<style scoped>
.info-page {
  display: grid;
  gap: 1rem;
  padding: 1.75rem;
  border-radius: 28px;
  background: rgba(10, 17, 26, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.eyebrow {
  margin: 0;
  color: #efb366;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
}

h1,
p {
  margin: 0;
}

h1 {
  color: #f8f0e5;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
}

p {
  color: rgba(248, 240, 229, 0.78);
  max-width: 42rem;
}
</style>
