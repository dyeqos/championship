<script setup lang="ts">
import type { EssentialLinkProps } from '../interfaces/FrameInterface';

const props = withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  icon: '',
});
</script>

<template>
  <div>
    <q-item
      v-if="!props.children || props.children.length === 0"
      clickable
      :to="props.name ? { name: props.name } : undefined"
    >
      <q-item-section v-if="props.icon" avatar>
        <q-icon :name="props.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ props.title }}</q-item-label>
        <q-item-label caption>{{ props.caption }}</q-item-label>
      </q-item-section>
    </q-item>

    <!-- Parent with children: usar QExpansionItem para desplegable -->
    <q-expansion-item
      v-else
      :label="props.title"
      :caption="props.caption"
      :icon="props.icon"
      :content-inset-level="0.3"
      dense
      expand-separator
    >
      <q-list padding>
        <EssentialLink
          v-for="(child, idx) in props.children"
          :key="(child.name ?? child.title) + '-' + idx"
          v-bind="child"
        />
      </q-list>
    </q-expansion-item>
  </div>
</template>
