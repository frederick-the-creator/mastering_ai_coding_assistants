import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// Default editor options
export const defaultEditorOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean']
    ]
  },
  placeholder: 'Write your thoughts here...',
};

export default {
  install: (app) => {
    app.component('QuillEditor', QuillEditor);
  }
};
