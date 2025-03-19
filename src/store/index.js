import { defineStore } from 'pinia'

// Journal entries store
export const useJournalStore = defineStore('journal', {
  state: () => ({
    entries: [
      {
        id: 1,
        title: 'My First Journal Entry',
        content: 'Today I started using this amazing journaling app. The AI features seem promising!',
        date: new Date('2025-03-15').toISOString(),
        tags: ['personal', 'technology']
      },
      {
        id: 2,
        title: 'Project Ideas',
        content: 'Brainstorming session for the new app: 1) Add voice notes, 2) Implement dark mode, 3) Create weekly summary feature',
        date: new Date('2025-03-17').toISOString(),
        tags: ['work', 'ideas', 'brainstorming']
      },
      {
        id: 3,
        title: 'Learning Vue 3',
        content: 'Composition API is amazing! I love how it organizes code by logical concerns rather than option types.',
        date: new Date('2025-03-18').toISOString(),
        tags: ['learning', 'programming', 'vue']
      }
    ],
    nextId: 4
  }),
  getters: {
    getEntryById: (state) => (id) => {
      return state.entries.find(entry => entry.id === id)
    },
    getEntriesByTag: (state) => (tag) => {
      return state.entries.filter(entry => entry.tags.includes(tag))
    },
    getAllTags: (state) => {
      const tagsSet = new Set()
      state.entries.forEach(entry => {
        entry.tags.forEach(tag => tagsSet.add(tag))
      })
      return Array.from(tagsSet)
    }
  },
  actions: {
    addEntry(entry) {
      const newEntry = {
        id: this.nextId++,
        date: new Date().toISOString(),
        ...entry
      }
      this.entries.push(newEntry)
      return newEntry
    },
    updateEntry(updatedEntry) {
      const index = this.entries.findIndex(entry => entry.id === updatedEntry.id)
      if (index !== -1) {
        this.entries[index] = { ...this.entries[index], ...updatedEntry }
        return true
      }
      return false
    },
    deleteEntry(id) {
      const index = this.entries.findIndex(entry => entry.id === id)
      if (index !== -1) {
        this.entries.splice(index, 1)
        return true
      }
      return false
    }
  }
})

// Main store for the application
export const useMainStore = defineStore('main', {
  state: () => ({
    // Initial state
  }),
  getters: {
    // Getters
  },
  actions: {
    // Actions
  }
})
