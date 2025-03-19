<template>
  <div class="journal-entries">
    <h1 class="text-h4 mb-4">Journal Entries</h1>
    
    <new-entry-form class="mb-6" />
    
    <v-divider class="mb-6"></v-divider>
    
    <div v-if="journalStore.entries.length > 0">
      <journal-entry-card
        v-for="entry in journalStore.entries"
        :key="entry.id"
        :entry="entry"
        class="mb-4"
      />
    </div>
    <v-alert
      v-else
      type="info"
      text="You don't have any journal entries yet. Create your first one above!"
    ></v-alert>
  </div>
</template>

<script setup>
import { useJournalStore } from '../store';
import JournalEntryCard from '../components/JournalEntryCard.vue';
import NewEntryForm from '../components/NewEntryForm.vue';

const journalStore = useJournalStore();
</script>

<style scoped>
.journal-entries {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
