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
        <tr v-for="item in permissionList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <!-- delete icon -->
            <svg-icon icon="fluent:delete-24-regular"></svg-icon>
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
import { computed, watch, reactive } from 'vue';

const title = '修改权限';
export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /** 表单数据 */
  editData: UserManagement.RolePermission | null;
}

defineOptions({ name: 'TableActionModal' });

const props = withDefaults(defineProps<Props>(), {
  editData: null
});

interface Emits {
  (e: 'update:visible', visible: boolean): void;
  (e: 'update:editData', editData: UserManagement.RolePermission | null): void;
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
// 权限列表
let permissionList = reactive<any>([]);
// 获取表单数据
const handleEditTable = () => {
  if (props.editData) {
    // console.log(props.editData);
    permissionList = props.editData.permissions;
  }
};

// 新增权限
const addPermission = () => {
  console.log('新增权限');
  // 让所有权限成为一个数组，然后，监听数组变化
};

// 监听数据变化，然后获取props数据
watch(
  () => props.editData,
  newVal => {
    if (newVal) handleEditTable();
  }
);
</script>

<style scoped></style>
