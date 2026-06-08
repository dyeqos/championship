import type BadgeComponent from './components/badge/BadgeComponent.vue';
import type ButtonComponent from './components/button/ButtonComponent.vue';
import type InputComponent from './components/input/InputComponent.vue';
import type ModalComponent from './components/modal/ModalComponent.vue';
import type PanelComponent from './components/panel/PanelComponent.vue';
import type PersonSearchComponent from './components/person/PersonSearchComponent.vue';
import type SelectComponent from './components/select/SelectComponent.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'dc-badge': typeof BadgeComponent;
    'dc-button': typeof ButtonComponent;
    'dc-input': typeof InputComponent;
    'dc-modal': typeof ModalComponent;
    'dc-panel': typeof PanelComponent;
    'dc-person-search': typeof PersonSearchComponent;
    'dc-select': typeof SelectComponent;
  }
}

export {};
