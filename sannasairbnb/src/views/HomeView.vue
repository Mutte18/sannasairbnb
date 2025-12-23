<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="wrapper">
      <RouterLink to="/boenden/kungshamn"><div class="booking">Kungshamn</div></RouterLink>
      <RouterLink to="/boenden/falkoping"><div class="booking">Falköping</div></RouterLink>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 0fr);
  grid-gap: 20px;
  width: 100%;
}

.booking {
  margin-top: 50px;
  height: 500px;
  width: 500px;
  background-color: darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
