<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>AI Journal</v-app-bar-title>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item title="Home" prepend-icon="mdi-home" to="/"></v-list-item>
        <v-list-item title="Journal Entries" prepend-icon="mdi-notebook" to="/entries"></v-list-item>
        <v-list-item title="Settings" prepend-icon="mdi-cog" to="/settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} - AI Journal</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

// Navigation drawer state
const drawer = ref(false);
</script>

<style>
/* Global styles */
body {
  font-family: 'Roboto', sans-serif;
}
</style>
