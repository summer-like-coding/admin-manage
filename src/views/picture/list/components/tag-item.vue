<template>
  <n-dynamic-tags v-model:value="changeTag" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

// 首先定义Props类型
export interface TagProp {
  label: string;
  value: string;
}
// 定义tag类型
export interface Props {
  tags: string[];
}
const props = withDefaults(defineProps<Props>(), {
  tags: () => ['好物']
});

// 使用emits
interface Emits {
  (e: 'update:tags', label: string[]): void;
}
const emit = defineEmits<Emits>();
// 使用
const changeTag = computed({
  get() {
    return props.tags;
  },
  set(label) {
    console.log('label', label);

    emit('update:tags', label);
  }
});
</script>

<style scoped></style>
