import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './Components/UI/BaseCard.vue';
import BaseButton from './Components/UI/BaseButton.vue';
import ErrorDialogue from './Components/Dialogues/ErrorDialogue.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('error-dialogue', ErrorDialogue);
app.mount('#app');
