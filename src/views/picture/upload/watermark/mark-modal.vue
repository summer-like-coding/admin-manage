<template>
  <n-modal v-model:show="visible" preset="card" :title="title" class="w-700px">
    <CanvasDrag></CanvasDrag>
  </n-modal>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CanvasDrag from './CanvasDrag.vue';

const title = '打码区域';
// 设置Props
interface Props {
  /** 弹窗可见性 */
  visible: boolean;
}
// 声明emit，用于修改visible
interface Emits {
  (e: 'update:visible', visible: boolean): void;
}
const emit = defineEmits<Emits>();
// 使用withDefaults函数，可以为props设置默认值
const props = withDefaults(defineProps<Props>(), {
  visible: false
});
// 使用计算属性切换模态框的可见性
const visible = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emit('update:visible', value);
  }
});
</script>

<style scoped></style>
