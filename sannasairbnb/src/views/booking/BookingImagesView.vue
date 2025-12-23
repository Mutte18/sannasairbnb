<script setup>
import BookingNavbar from '@/components/booking/BookingNavbar.vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header>
    <booking-navbar />
  </header>
  <div>
    <h1>Detta är bilder för boendet!</h1>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 10px;
  background-color: rgba(68, 62, 38, 0.76);
}
</style>
