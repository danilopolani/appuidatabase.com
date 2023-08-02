<template>
  <input
    type="text"
    v-model="searchInput"
    placeholder="Search an app"
    class="border-2 border-pastel-black w-1/3 focus:border-pastel-red focus:ring-0 focus:rounded-none outline-none mb-10 py-2 px-3" />

  <section v-for="(apps, category) in data" :key="category" class="mb-14">
    <h2 class="font-semibold text-2xl mb-2 font-heading tracking-tighter">{{ category }}</h2>

    <div class="grid grid-cols-4 gap-5">
      <app-card
        v-for="app in apps"
        :key="app.id"
        :title="app.title"
        :image="app.image"
        :href="'/apps/' + app.id"
        :screens-count="app.screensCount"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import * as R from 'remeda';
import AppCard from './AppCard.vue';
import type { App } from 'src/types';

const searchInput = ref('');

const props = defineProps<{
  apps: App[],
}>();

const data = computed(() => R.groupBy(
  props.apps.filter((app) => app.title.toLowerCase().includes(searchInput.value)),
  (app) => app.category,
));
</script>
