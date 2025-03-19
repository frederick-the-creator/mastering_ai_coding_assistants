<template>
  <base-card>
    <v-card-title>{{ entry.title }}</v-card-title>
    <v-card-subtitle>
      {{ formatDate(entry.date) }}
    </v-card-subtitle>
    <v-card-text>
      <p>{{ entry.content }}</p>
      <div class="mt-2">
        <v-chip
          v-for="tag in entry.tags"
          :key="tag"
          size="small"
          class="mr-1 mb-1"
          color="primary"
          variant="outlined"
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="primary">Edit</v-btn>
      <v-btn variant="text" color="error">Delete</v-btn>
    </v-card-actions>
  </base-card>
</template>

<script setup>
defineProps({
  entry: {
    type: Object,
    required: true
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>
