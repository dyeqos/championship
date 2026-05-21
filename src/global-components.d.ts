import type BadgeComponent from './components/badge/BadgeComponent.vue';
import type ButtonComponent from './components/button/ButtonComponent.vue';
import type PanelComponent from './components/panel/PanelComponent.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'dc-badge': typeof BadgeComponent;
    'dc-button': typeof ButtonComponent;
    'dc-panel': typeof PanelComponent;
  }
}

export {};
