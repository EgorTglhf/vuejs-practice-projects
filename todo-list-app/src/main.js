import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI';
import directives from './directives';

import './assets/main.css';

const app = createApp(App);
//registrate custom UI components
components.forEach((component) => {
  app.component(component.__name, component);
});
//registrate custom directives
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.mount('#app');
