<template>
  <n-pagination v-model:page="page" :page-count="100" class="mt-0 ml-auto mr-auto mb-0" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const page = ref(1);
</script>
