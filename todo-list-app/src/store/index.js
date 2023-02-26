import { createStore } from 'vuex';

export default createStore({
  state: {
    priorityOptions: [
      { value: '1', name: 'ASAP', color: 'red' },
      { value: '2', name: 'Important', color: 'blue' },
      { value: '3', name: 'Normal', color: 'green' },
    ],
  },
});
