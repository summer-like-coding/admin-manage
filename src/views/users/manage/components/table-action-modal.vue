<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-table :bordered="false">
      <thead>
        <tr>
          <th class="w-400px">权限列表</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>上传图片</td>
          <td>
            <delete-button></delete-button>
          </td>
        </tr>
        <tr>
          <td>删除图片</td>
          <td>
            <delete-button></delete-button>
          </td>
        </tr>
        <tr>
          <td>下载图片</td>
          <td>
            <delete-button></delete-button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <n-button @click="addPermission()">新增权限</n-button>
          </td>
        </tr>
      </tbody>
    </n-table>
  </n-modal>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// 导入删除按钮
import deleteButton from '@/components/common/delete-button.vue';

const title = '修改权限';
export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
}

defineOptions({ name: 'TableActionModal' });

const props = withDefaults(defineProps<Props>(), {
  visible: false
});

interface Emits {
  (e: 'update:visible', visible: boolean): void;
}

const emit = defineEmits<Emits>();

const modalVisible = computed({
  get() {
    return props.visible;
  },
  set(visible) {
    emit('update:visible', visible);
  }
});

// 新增权限
const addPermission = () => {
  console.log('新增权限');
  // 让所有权限成为一个数组，然后，监听数组变化
};
</script>

<style scoped></style>
