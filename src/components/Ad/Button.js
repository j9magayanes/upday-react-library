import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Button from './Button.vue';

Vue.use(vueCustomElement);

// Register the Vue component as a custom element
Vue.customElement('vue-counter', Button);
