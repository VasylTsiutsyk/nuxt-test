import ClickOutsideDirective from '@/directives/click-outside.js';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('click-outside', ClickOutsideDirective);
});
