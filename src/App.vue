<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>AI Journal</v-app-bar-title>
    </v-app-bar>
    
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
// App root component
</script>

<style>
/* Global styles */
body {
  font-family: 'Roboto', sans-serif;
}
</style>
