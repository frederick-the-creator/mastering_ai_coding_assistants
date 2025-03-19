<template>
  <base-card>
    <v-card-title>Add New Journal Entry</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submitForm" ref="form">
        <v-text-field
          v-model="title"
          label="Title"
          :rules="[v => !!v || 'Title is required']"
          required
        ></v-text-field>
        
        <v-textarea
          v-model="content"
          label="Content"
          :rules="[v => !!v || 'Content is required']"
          required
          auto-grow
          rows="4"
        ></v-textarea>
        
        <v-combobox
          v-model="tags"
          label="Tags"
          multiple
          chips
          small-chips
          hint="Enter tags and press Enter"
          persistent-hint
        ></v-combobox>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="submitForm">Save Entry</v-btn>
    </v-card-actions>
  </base-card>
</template>

<script setup>
import { ref } from 'vue';
import { useJournalStore } from '../store';

const journalStore = useJournalStore();

const form = ref(null);
const title = ref('');
const content = ref('');
const tags = ref([]);

const submitForm = () => {
  const { valid } = form.value.validate();
  
  if (valid) {
    journalStore.addEntry({
      title: title.value,
      content: content.value,
      tags: tags.value
    });
    
    // Reset form
    title.value = '';
    content.value = '';
    tags.value = [];
    form.value.reset();
  }
};
</script>
