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
        
        <div class="mb-4">
          <label class="text-subtitle-1 mb-2 d-block">Content <span class="text-red">*</span></label>
          <QuillEditor
            v-model:content="content"
            :options="defaultEditorOptions"
            contentType="html"
            :style="{ height: '200px', marginBottom: '16px' }"
            :rules="[v => !!v || 'Content is required']"
          />
          <div class="text-caption text-red" v-if="!content">Content is required</div>
        </div>
        
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
import { QuillEditor } from '@vueup/vue-quill';
import { defaultEditorOptions } from '../plugins/quill';

const journalStore = useJournalStore();

const form = ref(null);
const title = ref('');
const content = ref('');
const tags = ref([]);

const submitForm = () => {
  const { valid } = form.value.validate();
  
  if (valid && content.value) {
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
