# Sprint 2 User Stories

## Story S2.1: Implement Rich Text Editor for Journal Entries
As a user, I want to format my journal entries with basic text styling so that I can better express my thoughts and organize my content.

### Acceptance Criteria:
- Replace the basic textarea in NewEntryForm.vue with a rich text editor component
- Support basic formatting: bold, italic, underline, headings, and lists
- Ensure formatted content is properly stored in the Pinia store
- Display formatted content correctly in the JournalEntryCard component
- Maintain compatibility with existing form validation

### Dependencies: 
None (builds on existing NewEntryForm.vue)

### Developer Notes:
- Consider using a Vue-compatible WYSIWYG editor like Quill, TinyMCE, or CKEditor
- Store HTML content in the Pinia store
- Ensure proper sanitization of HTML content to prevent XSS attacks
- Update JournalEntryCard.vue to render HTML content safely

### Technical Rationale: 
This implements the partially completed UI-3 requirement for text formatting capabilities, enhancing the core journaling experience.

## Story S2.2: Implement Search Functionality for Journal Entries
As a user, I want to search through my journal entries by content or tags so that I can quickly find specific entries.

### Acceptance Criteria:
- Add a search bar component to the JournalEntriesView
- Implement search by entry content (title and body text)
- Implement search by tags
- Display search results in real-time as the user types
- Provide visual feedback when no results are found
- Ensure search is case-insensitive

### Dependencies: 
None (builds on existing Pinia store getters)

### Developer Notes:
- Extend the existing Pinia store with a new getter for content-based search
- Combine with existing tag-based search functionality
- Consider debouncing the search input to improve performance
- Add clear button to reset search results

### Technical Rationale: 
This implements the partially completed EO-2 requirement for search functionality, which becomes increasingly important as users accumulate more journal entries.

## Story S2.3: Implement Tag-based Filtering for Journal Entries
As a user, I want to filter my journal entries by tags so that I can view entries related to specific categories.

### Acceptance Criteria:
- Add a tag filter component to the JournalEntriesView
- Display all available tags with visual indicators (chips/badges)
- Allow selecting multiple tags for filtering (AND logic)
- Update the entry list in real-time as filters are applied
- Provide visual feedback when no entries match the filter criteria
- Allow clearing all filters easily

### Dependencies: 
None (builds on existing Pinia store tag getters)

### Developer Notes:
- Use the existing getAllTags getter from the Pinia store
- Implement a new UI component for tag selection
- Consider using Vuetify chips or similar components for tag display
- Ensure filtering works in combination with search functionality

### Technical Rationale: 
This implements the partially completed EO-3 requirement for filtering options, complementing the search functionality and improving content organization.

## Story S2.4: Implement Local Storage Persistence
As a user, I want my journal entries to persist between browser sessions so that I don't lose my data when closing the browser.

### Acceptance Criteria:
- Automatically save journal entries to browser's localStorage
- Load entries from localStorage when the application starts
- Handle localStorage quota limitations gracefully
- Provide visual feedback if storage fails
- Maintain the existing in-memory Pinia store structure

### Dependencies: 
None (builds on existing Pinia store)

### Developer Notes:
- Create a service to handle localStorage operations
- Subscribe to Pinia store changes to automatically save updates
- Consider using a throttling mechanism to prevent excessive writes
- Implement proper error handling for storage quota exceeded
- This is a precursor to the full backup/export functionality (DM-3)

### Technical Rationale: 
This addresses the DM-1 requirement for local storage of journal entries, moving from in-memory only to persistent storage, which is essential for a journaling application.
